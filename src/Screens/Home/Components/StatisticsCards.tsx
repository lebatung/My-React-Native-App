import React, { useState } from 'react';
import { Text, Box } from 'native-base';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export const StatisticsCards = () => {
  const [activeTab, setActiveTab] = useState('labor'); // 'labor' hoặc 'organization'

  const renderContent = () => {
    if (activeTab === 'labor') {
      return (
        <>
          <Box style={[styles.card, { backgroundColor: '#2196F3' }]}>
            <Text color="white" fontSize="lg" fontWeight="bold">Có việc làm</Text>
            <Text color="white" fontSize="xl">1.245 người</Text>
          </Box>
          <Box style={[styles.card, { backgroundColor: '#009688' }]}>
            <Text color="white" fontSize="lg" fontWeight="bold">Thất nghiệp</Text>
            <Text color="white" fontSize="xl">1.245 người</Text>
          </Box>
        </>
      );
    }
    return (
      <>
        <Box style={[styles.card, { backgroundColor: '#2196F3' }]}>
          <Text color="white" fontSize="lg" fontWeight="bold">Đang hoạt động</Text>
          <Text color="white" fontSize="xl">1.245 tổ chức</Text>
        </Box>
        <Box style={[styles.card, { backgroundColor: '#009688' }]}>
          <Text color="white" fontSize="lg" fontWeight="bold">Ngưng hoạt động</Text>
          <Text color="white" fontSize="xl">1.245 tổ chức</Text>
        </Box>
      </>
    );
  };

  return (
    <Box p={4}>
      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'labor' && styles.activeTab]} 
          onPress={() => setActiveTab('labor')}
        >
          <Text color={activeTab === 'labor' ? '#2196F3' : '#666'}>Cung lao động</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'organization' && styles.activeTab]}
          onPress={() => setActiveTab('organization')}
        >
          <Text color={activeTab === 'organization' ? '#2196F3' : '#666'}>Cầu lao động</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {renderContent()}
      </View>
      
      <Box style={[styles.card, { backgroundColor: '#9E9E9E', marginTop: 12 }]}>
        <Text color="white" fontSize="lg" fontWeight="bold">
          {activeTab === 'labor' ? 'Không tham gia hoạt động kinh tế' : 'Không tìm thấy'}
        </Text>
        <Text color="white" fontSize="xl">1.245 {activeTab === 'labor' ? 'người' : 'tổ chức'}</Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: 'white',
  },
});