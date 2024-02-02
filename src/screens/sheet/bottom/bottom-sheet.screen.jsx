import { Text, View } from 'react-native'
import React, { useMemo, useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'

const BottomSheetScreen = () => {
  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(() => ['17%', '50%'], [])

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index)
  }, [])

  return <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints} onChange={handleSheetChanges} />
}

export default BottomSheetScreen
