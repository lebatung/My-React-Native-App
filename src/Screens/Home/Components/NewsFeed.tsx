import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, Box } from 'native-base';

const { width } = Dimensions.get('window');

const newsData = [
  {
    id: 1,
     image: require('../../../../assets/image.png'),
    title: 'Người lao động có thể nộp tiền BHTN đoàn nghiệp nợ để...',
  },
  {
    id: 2,
    image: require('../../../../assets/image.png'),
    title: 'Đại học Công nghệ Miền Đông cam kết việc làm cho...',
  },
];

export const NewsFeed = () => {
  return (
    <Box p={4} mt={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Tin tức
      </Text>
      <View style={styles.newsContainer}>
        {newsData.map((news) => (
          <View key={news.id} style={styles.newsCard}>
            <Image source={news.image} style={styles.newsImage} />
            <Text fontSize="md" numberOfLines={2} mt={2}>
              {news.title}
            </Text>
          </View>
        ))}
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  newsCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
  },
  newsImage: {
    width: '100%',
    height: (width - 48) / 2 * 0.6, // Tỉ lệ 3:2
    borderRadius: 8,
  },
});