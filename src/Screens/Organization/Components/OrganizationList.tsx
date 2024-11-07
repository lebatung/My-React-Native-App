import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface OrganizationItem {
  id: string;
  name: string;
  code: string;
  type: string;
  phoneNumber: string;
  address: string;
  representative: string;
  position: string;
}

const MOCK_DATA: OrganizationItem[] = [
  {
    id: '1',
    name: 'Công ty A',
    code: 'TC001',
    type: 'Tư nhân',
    phoneNumber: '0123456789',
    address: 'Phường 9, Thành Phố Vĩnh Long, Tỉnh Vĩnh Long',
    representative: 'Nguyễn Văn A',
    position: 'Giám đốc'
  },
  {
    id: '2',
    name: 'Công ty B',
    code: 'TC001',
    type: 'Tư nhân',
    phoneNumber: '0123456789',
    address: 'Phường 9, Thành Phố Vĩnh Long, Tỉnh Vĩnh Long',
    representative: 'Nguyễn Văn A',
    position: 'Giám đốc'
  },
  {
    id: '3',
    name: 'Công ty C',
    code: 'TC001',
    type: 'Tư nhân',
    phoneNumber: '0123456789',
    address: 'Phường 9, Thành Phố Vĩnh Long, Tỉnh Vĩnh Long',
    representative: 'Nguyễn Văn A',
    position: 'Giám đốc'
  },
  {
    id: '4',
    name: 'Công ty D',
    code: 'TC001',
    type: 'Tư nhân',
    phoneNumber: '0123456789',
    address: 'Phường 9, Thành Phố Vĩnh Long, Tỉnh Vĩnh Long',
    representative: 'Nguyễn Văn A',
    position: 'Giám đốc'
  }
];

const OrganizationList = () => {
  const renderItem = ({ item }: { item: OrganizationItem }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <Text style={{ fontSize: 24 }}>🏢</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.organizationName}>{item.name}</Text>
          <TouchableOpacity>
          <Icon name="ellipsis-vertical" size={20} color="#666" />
        </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text>Mã tổ chức: {item.code}</Text>
          <View style={styles.typeContainer}>
            <Text>Loại hình: {item.type}</Text>
          </View>
        </View>
        <Text>Người đại diện: {item.representative}</Text>
        <Text>Chức vụ: {item.position}</Text>
        <Text>Số điện thoại: {item.phoneNumber}</Text>
        <Text>Địa chỉ: {item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={{ fontSize: 50, marginBottom: 10 }}>📝</Text>
      <Text style={styles.emptyText}>Không có dữ liệu</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.resultCount}>Tìm thấy: {MOCK_DATA.length} kết quả</Text>
      <FlatList
        data={MOCK_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.list,
          MOCK_DATA.length === 0 && styles.emptyList
        ]}
        ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultCount: {
    paddingHorizontal: 16,
    paddingVertical: 2,
    color: '#666',
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    height: 24,
  },
  organizationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    justifyContent: 'center',
    marginRight: 12,
  },
  menuIconContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  typeContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  emptyList: {
    flex: 1,
  },
});

export default OrganizationList;