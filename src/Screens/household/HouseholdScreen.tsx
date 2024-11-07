import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './Components/HouseholdHeader';
import HouseholdHeader from '../../Screens/household/Components/HouseholdHeader';
import SearchBar from '../../Screens/household/Components/SearchBar';
import HouseholdList from '../../Screens/household/Components/HouseholdList';
import FloatingButton from '../../Screens/household/Components/FloatingButtom';

const HouseholdScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Hộ gia đình" />
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <HouseholdList />
      <FloatingButton onPress={() => {/* Xử lý thêm mới */}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HouseholdScreen;