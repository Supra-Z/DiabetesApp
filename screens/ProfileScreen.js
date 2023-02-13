import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>

      <Button
      title="Go to profile"
      onPress={() => navigation.navigate('Home')}>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;