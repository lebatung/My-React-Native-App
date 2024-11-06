import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Avatar, Box, Pressable, Icon } from 'native-base';
import { UserHeader } from './Components/UserHeader';
import { StatisticsCards } from './Components/StatisticsCards';
import { FeatureGrid } from './Components/FeatureGrid';
import { NewsFeed } from './Components/NewsFeed';
import { BottomTabs } from './Components/BottomTabs';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <UserHeader />
        <StatisticsCards />
        <FeatureGrid />
        <NewsFeed />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});