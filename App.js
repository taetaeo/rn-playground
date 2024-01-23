import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import DeafultLogo from './src/components/default-logo';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

export default function App() {
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    console.log(e);
    setValue(e.target.value);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>RN Playground</Text>
      <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{ width: 200, height: 200 }} />
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} value={value} onChange={handleChange} defaultValue="하하하" />
      <ScrollView>
        {[1, 2, 3, 4, 5, 5].map((_, index) => (
          <DeafultLogo logo={logo} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
