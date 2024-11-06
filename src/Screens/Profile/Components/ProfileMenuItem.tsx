import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, Icon, HStack } from 'native-base';
import { ChevronRight } from 'lucide-react-native';

type ProfileMenuItemProps = {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
};

export const ProfileMenuItem = ({ icon, title, onPress }: ProfileMenuItemProps) => {
  return (
    <Pressable 
      style={styles.container}
      onPress={onPress}
    >
      <HStack space={3} alignItems="center">
        {icon}
        <Text flex={1}>{title}</Text>
        <Icon as={ChevronRight} size="sm" color="gray.400" />
      </HStack>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
});