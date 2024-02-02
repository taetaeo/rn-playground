import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from '../../screens/main/index.screen'
import FavoriteScreen from '../../screens/favorite/index.screen'
import MoreScreen from '../../screens/more/index.screen'
import AlarmScreen from '../../screens/alarm/index.screen'
import SubscribeScreen from '../../screens/subscribe/index.screen'

const Stack = createNativeStackNavigator()
const DefaultNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: Platform.OS == 'ios',
        }}
      >
        <Stack.Screen name={'홈'} component={MainScreen} />
        {/* <Stack.Screen name={'BottomTab'} component={BOn} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default DefaultNavigator

const styles = StyleSheet.create({})
