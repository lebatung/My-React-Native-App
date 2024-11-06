import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Box } from 'native-base';

type ProfileSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const ProfileSection = ({ title, children }: ProfileSectionProps) => {
  return (
    <Box mt={4}>
      <Text fontSize="md" fontWeight="medium" color="gray.600" mb={2} px={4}>
        {title}
      </Text>
      <Box bg="white">{children}</Box>
    </Box>
  );
};