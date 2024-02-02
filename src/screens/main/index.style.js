import { Platform, StyleSheet } from 'react-native'

// 컨테이너 스타일
const containerStyle = {
  flex: 1,
  paddingTop: Platform.OS === 'android' ? 20 : 0, // Android 와 ios 분기처리
  backgroundColor: '#f7f78fa',
}

// 페이지 제목 스타일
const pageTitleStyle = {
  marginBottom: 35,
  paddingHorizontal: 15,
  fontSize: 21,
  fontWeight: '600',
}

// 리스트 스타일
const listViewStyle = {
  flex: 1,
}

// 리스트 제목 스타일
const listTitleStyle = {
  marginBottom: 25,
  paddingHorizontal: 15,
  fontSize: 21,
  fontWeight: '500',
}

// 분리 밑줄 스타일
const separatorStyle = {
  marginHorizontal: 10,
  marginTop: 25,
  marginBottom: 10,
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(0,0,0,.2)',
}

const styles = StyleSheet.create({
  container: containerStyle,
  pageTitle: pageTitleStyle,
  listView: listViewStyle,
  listTitle: listTitleStyle,
  separator: separatorStyle,
})
export default styles
