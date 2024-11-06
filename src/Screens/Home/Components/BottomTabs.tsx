import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Pressable, Icon } from 'native-base';
import { Home, Plus, User } from 'lucide-react-native';

export const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.tab}>
        <Icon as={Home} color="green.600" />
        <Text color="green.600">Trang chủ</Text>
      </Pressable>
      <Pressable style={styles.plusButton}>
        <Icon as={Plus} color="white" size="xl" />
      </Pressable>
      <Pressable style={styles.tab}>
        <Icon as={User} color="gray.400" />
        <Text color="gray.400">Cá nhân</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tab: {
    alignItems: 'center',
    gap: 4,
  },
  plusButton: {
    backgroundColor: '#009688',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -28,
  },
});