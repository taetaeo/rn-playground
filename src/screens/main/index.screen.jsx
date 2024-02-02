import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar' // 상태 바

// 스타일
import styles from './index.style'
// import KeyboardAvoiding from '../../components/keyboard/keyboard-avoiding'
import InputForm from '../../components/form/input-form'
import TodoItem from '../../components/items/todo-item'
import BottomSheetScreen from '../sheet/bottom/bottom-sheet.screen'

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor='#61dafb' barStyle='default' />
      <Text style={styles.pageTitle}>To Do App</Text>
      {/* 할 일 */}
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할일</Text>
        <TodoItem />
      </View>
      {/* 할 일 */}

      {/* 밑 줄 */}
      <View style={styles.separator} />
      {/* 밑 줄 */}

      {/* 완료된 일 */}
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
      </View>
      {/* 완료된 일 */}

      <InputForm />
      <BottomSheetScreen />
    </SafeAreaView>
  )
}

export default MainScreen
