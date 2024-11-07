import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar, Box } from 'native-base';

export const ProfileHeader = () => {
  return (
    <Box bg="white" p={4}>
      <View style={styles.container}>
        <Avatar 
          size="lg"
          source={require('../../../../assets/avatar.png')}
        />
        <View style={styles.info}>
          <Text fontSize="lg" fontWeight="bold">Bùi Thanh Hoàng</Text>
          <Text fontSize="sm" color="gray.600">Mã đơn vị: 095 - Tỉnh Bạc Liêu</Text>
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 12,
  },
});