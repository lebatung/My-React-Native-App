import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Box } from 'native-base';

export const StatisticsCards = () => {
  return (
    <Box p={4}>
      <View style={styles.row}>
        <Box style={[styles.card, { backgroundColor: '#2196F3' }]}>
          <Text color="white" fontSize="lg" fontWeight="bold">Có việc làm</Text>
          <Text color="white" fontSize="xl">1.245 người</Text>
        </Box>
        <Box style={[styles.card, { backgroundColor: '#009688' }]}>
          <Text color="white" fontSize="lg" fontWeight="bold">Thất nghiệp</Text>
          <Text color="white" fontSize="xl">1.245 người</Text>
        </Box>
      </View>
      <Box style={[styles.card, { backgroundColor: '#9E9E9E', marginTop: 12 }]}>
        <Text color="white" fontSize="lg" fontWeight="bold">
          Không tham gia hoạt động kinh tế
        </Text>
        <Text color="white" fontSize="xl">1.245 người</Text>
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
});