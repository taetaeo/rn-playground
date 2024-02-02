import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckboxUnchecked from '../../../assets/checkbox-unchecked.svg'
import CheckboxChecked from '../../../assets/checkbox-check.svg'
import DeleteIcon from '../../../assets/delete-filled.svg'

const TodoItem = () => {
  return (
    <View style={styles.container}>
      {/* 체크박스 */}
      <Pressable hitSlop={10} style={styles.itemTextChecked}>
        {/* <CheckboxUnchecked /> */}
        {/* <CheckboxChecked style={styles.itemCheckboxCheckedIcon} /> */}
      </Pressable>
      {/* 체크박스 */}

      {/* 글 */}
      <Text style={[styles.itemText, styles.itemTextChecked]}></Text>
      {/* 글 */}

      {/* 삭제버튼 */}
      <Pressable style={[styles.deleteButton, styles.deleteButtonDone]} hitSlop={10}>
        {/* <DeleteIcon /> */}
      </Pressable>
      {/* 삭제버튼 */}
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  container: {},
  itemText: {},
  itemTextChecked: {},
  itemCheckboxCheckedIcon: {},
  deleteButton: {},
  deleteButtonDone: {},
})
