import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';


import SearchBar from '../../Screens/household/Components/SearchBar';
import HouseholdList from '../../Screens/household/Components/HouseholdList';
import FloatingButton from '../../Screens/household/Components/FloatingButtom';
import Header from './Components/OrganizationHeader';
import OrganizationList from './Components/OrganizationList';

const HouseholdScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tổ chức" />
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <OrganizationList />
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