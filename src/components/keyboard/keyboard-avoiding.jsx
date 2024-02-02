import React from 'react'
import { View, KeyboardAvoidingView, TextInput, Text, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native'

// 스타일
import styles from './index.style'

const KeyboardAvoiding = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* <Text style={styles.header}>Header</Text> */}
          <TextInput placeholder='Username' style={styles.textInput} />
          {/* <View style={styles.btnContainer}>
            <Button title='Submit' onPress={() => null} />
          </View> */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoiding
