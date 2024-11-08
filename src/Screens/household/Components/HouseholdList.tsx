import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ApiHelper from '../../../Helper/AxiosHelper';
import React, { useState, useEffect } from 'react';
import {  Box } from 'native-base';

interface ApiResponse {
  message: string;
  data: HouseholdItem[];
  pagination: Pagination;
  status?: number;
}

interface Pagination {
  total: number;
  page: number;
  pages: number;
  per_page: number;
}

interface HouseholdItem {
  value: string;
  code: string;
  display: string;
  soCCCD: string;
  soDienThoai: string;
  email: string;
  loaiHoGD: number;
  soGiayTo: string;
  soNhaTT: string;
  diaChiCuTheTT: string;
  trangThai: boolean;
  ghiChu: string;
  ngayCap: string;
  ngaySinh: string;
  trangThaiText: string;
  tenLoaiHo: string;
  noiCap: string;
  gioiTinh: string;
  danToc: string;
  tonGiao: string;
  quocTich: string;
  chuHoID: string;
}

const HouseholdList = () => {
  const [households, setHouseholds] = useState<HouseholdItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    pages: 1,
    per_page: 2
  });

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await ApiHelper.get('/hogiadinh');
        const apiData = response as ApiResponse;
        setHouseholds(apiData.data);
        if (apiData.pagination) {
          setPagination(apiData.pagination);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: HouseholdItem }) => (
    <Box style={styles.card}>
      <View style={styles.iconContainer}>
        <Text style={{ fontSize: 24 }}>🏠</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.ownerName}>Chủ hộ: {item.display}</Text>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" size={20} color="#666" />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text>Mã hộ: {item.code}</Text>
          <Text style={styles.ethnicityText}>Dân tộc: {item.danToc}</Text>
        </View>
        <Text>Số CCCD: {item.soCCCD}</Text>
        <Text>Địa chỉ: {item.diaChiCuTheTT}</Text>
        <Text>SĐT: {item.soDienThoai}</Text>
        <Text>Loại hộ: {item.tenLoaiHo}</Text>
        <Text>Trạng thái: {item.trangThaiText}</Text>
      </View>
    </Box>
  );

  const loadMore = () => {
    if (pagination.page < pagination.pages) {
      setPagination(prev => ({ ...prev, page: prev.page + 1 }));
    }
  };

  return (
    <Box p={4}>
      {loading ? (
        <Text>Đang tải...</Text>
      ) : (
        <>
          <Text style={styles.resultCount}>
            Tìm thấy: {pagination.total} kết quả
          </Text>
          <FlatList
            data={households}
            renderItem={renderItem}
            keyExtractor={(item) => item.value}
            contentContainerStyle={styles.list}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
          />
        </>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  resultCount: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  list: {
    gap: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    gap: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    justifyContent: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
    gap: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ownerName: {
    fontSize: 16,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ethnicityText: {
    color: '#666',
  },
});

export default HouseholdList;