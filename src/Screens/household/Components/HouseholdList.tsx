import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface HouseholdItem {
  id: string;
  ownerName: string;
  code: string;
  ethnicity: string;
  idNumber: string;
  address: string;
  householdNumber: string;
  religion: string;
}

const MOCK_DATA: HouseholdItem[] = [
    {
      id: '1',
      ownerName: 'Bùi Thanh Hoàng',
      code: 'HGD001',
      ethnicity: 'Kinh',
      idNumber: '001089123456',
      address: 'Phường 9, Thành Phố Vĩnh Long, Tỉnh Vĩnh Long',
      householdNumber: 'HGD001',
      religion: 'Không'
    },
    {
      id: '2',
      ownerName: 'Bùi Thanh Hoàng',
      code: 'HGD001',
      ethnicity: 'Kinh',
      idNumber: '001089123456',
      address: 'Phường 9, Thành Phố Vĩnh Long, Tỉnh Vĩnh Long',
      householdNumber: 'HGD001',
      religion: 'Không'
    },
    {
      id: '3',
      ownerName: 'Bùi Thanh Hoàng',
      code: 'HGD001',
      ethnicity: 'Kinh',
      idNumber: '001089123456',
      address: 'Phường 9, Thành Phố Vĩnh Long, Tỉnh Vĩnh Long',
      householdNumber: 'HGD001',
      religion: 'Không'
    },
    {
        id: '4',
        ownerName: 'Bùi Thanh Hoàng',
        code: 'HGD001',
        ethnicity: 'Kinh',
        idNumber: '001089123456',
        address: 'Phường 9, Thành Phố Vĩnh Long, Tỉnh Vĩnh Long',
        householdNumber: 'HGD001',
        religion: 'Không'
      },
      {
        id: '5',
        ownerName: 'Bùi Thanh Hoàng',
        code: 'HGD001',
        ethnicity: 'Kinh',
        idNumber: '001089123456',
        address: 'Phường 9, Thành Phố Vĩnh Long, Tỉnh Vĩnh Long',
        householdNumber: 'HGD001',
        religion: 'Không'
      },
      {
        id: '6',
        ownerName: 'Bùi Thanh Hoàng',
        code: 'HGD001',
        ethnicity: 'Kinh',
        idNumber: '001089123456',
        address: 'Phường 9, Thành Phố Vĩnh Long, Tỉnh Vĩnh Long',
        householdNumber: 'HGD001',
        religion: 'Không'
      }
  ];

const HouseholdList = () => {
  const renderItem = ({ item }: { item: HouseholdItem }) => (
    <TouchableOpacity style={styles.card}>
    <View style={styles.iconContainer}>
      <Text style={{ fontSize: 24 }}>🏠</Text>
    </View>
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.ownerName}>Chủ hộ: {item.ownerName}</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" size={20} color="#666" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>Mã hộ: {item.code}</Text>
        <Text style={styles.ethnicityText}>Dân tộc: {item.ethnicity}</Text>
      </View>
      <Text>Số CCCD: {item.idNumber}</Text>
      <Text>Địa chỉ: {item.address}</Text>
    </View>
  </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    <Text style={styles.resultCount}>Tìm thấy: {MOCK_DATA.length} kết quả</Text>
    <FlatList
      data={MOCK_DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
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
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  ownerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    justifyContent: 'center',
    marginRight: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 4,
  },
  ethnicityText: {
    marginLeft: 20,
  },
});

export default HouseholdList;