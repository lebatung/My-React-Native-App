import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar, Box, Pressable, Icon } from 'native-base';
import { Bell } from 'lucide-react-native';

export const UserHeader = () => {
  return (
    <Box p={4} bg="white">
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Avatar 
            size="md" 
            source={require('../../../../assets/avatar.png')}
          />
          <View style={styles.userText}>
            <Text fontSize="lg" fontWeight="bold">Bùi Thanh Hoàng</Text>
            <Text fontSize="sm" color="gray.500">Người dùng cấp Xã</Text>
          </View>
        </View>
        <Pressable>
          <Icon as={Bell} size="sm" />
        </Pressable>
      </View>
      <Pressable style={styles.location} mt={4}>
        <Text>Phường 1, Thành phố Bạc Liêu</Text>
      </Pressable>
    </Box>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userText: {
    marginLeft: 12,
  },
  location: {
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
});