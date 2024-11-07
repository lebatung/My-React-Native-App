import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Pressable, Icon, Box } from 'native-base';
import { RootScreens } from '@/Screens';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const features = [
  { icon: '🏠', title: 'Hộ gia đình', screen: RootScreens.HOUSEHOLD },
  { icon: '🏢', title: 'Tổ chức', screen: RootScreens.ORGANIZATION },
  { icon: '🔍', title: 'Thu thập cung lao động ban đầu' },
  { icon: '📊', title: 'Thu thập cung lao động ban đầu' },
  { icon: '🗺️', title: 'Bản đồ cung lao động' },
  { icon: '🗺️', title: 'Bản đồ cầu lao động' },
  { icon: '📈', title: 'Thống kê cung lao động' },
  { icon: '📊', title: 'Thống kê cầu lao động' },
];
type RootStackParamList = {
  [key in RootScreens]: undefined;
};

export const FeatureGrid = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleFeaturePress = (feature: typeof features[0]) => {
    if (feature.screen) {
      navigation.navigate(feature.screen);
    }
  };
  
  return (
    <Box 
      bg="white" 
      shadow={1}
      borderRadius={12}
      p={4}
      width="90%"
      alignSelf="center" 
    >
      <Box width="100%">
        <View style={styles.header}>
          <Text fontSize="lg" fontWeight="bold">Chức năng</Text>
          <Text color="green.500">Tùy chỉnh</Text>
        </View>

        <View style={styles.grid}>
          {features.map((feature, index) => (
            <Box  
              key={index}
              width="22%" 
              bg="#f5f5f5"
              borderRadius={8}
            >
              <Pressable 
                style={styles.feature}
                android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
                onPress={() => handleFeaturePress(feature)}
              >
                <Text fontSize={14}>{feature.icon}</Text>
                <Text fontSize={11} textAlign="center" mt={2} numberOfLines={2}>{feature.title}</Text>
              </Pressable>
            </Box>
          ))}
        </View>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
    width: '100%',
    paddingHorizontal: 2, 
  },
  feature: {
    width: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});