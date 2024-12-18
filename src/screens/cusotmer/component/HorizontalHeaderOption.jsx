import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const HorizontalHeaderOption = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      <View style={styles.headerOption}>
        <Text>Option 1</Text>
      </View>
      <View style={styles.headerOption}>
        <Text>Option 2</Text>
      </View>
      <View style={styles.headerOption}>
        <Text>Option 3</Text>
      </View>
      <View style={styles.headerOption}>
        <Text>Option 4</Text>
      </View>
      <View style={styles.headerOption}>
        <Text>Option 5</Text>
      </View>
    </ScrollView>
  );
};
export default HorizontalHeaderOption;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    gap: 5,
  },
  headerOption: {
    borderWidth: 1,
    borderColor: '#aaa',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 5,
    height: 30,
    backgroundColor: '#fff',
  },
});
