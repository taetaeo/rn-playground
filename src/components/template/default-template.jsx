import { Platform, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar' // 상태 바

const DefaultTemplate = ({ children, ...rest }) => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <StatusBar animated={true} backgroundColor='#61dafb' barStyle='default' />
      {children && children}
    </SafeAreaView>
  )
}

export default DefaultTemplate

const containerStyle = {
  flex: 1,
  paddingTop: Platform.OS === 'android' ? 20 : 0, // Android 와 ios 분기처리
  backgroundColor: '#f7f78fa',
}
const styles = StyleSheet.create({
  container: containerStyle,
})
