import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import MainScreen from '../../screens/main/index.screen'
import FavoriteScreen from '../../screens/favorite/index.screen'
import MoreScreen from '../../screens/more/index.screen'
import AlarmScreen from '../../screens/alarm/index.screen'
import SubscribeScreen from '../../screens/subscribe/index.screen'

// const Stack = ()
const Tab = createBottomTabNavigator()
const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='홈'>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Icon name='home' color={color} size={size} />,
          }}
          name='홈'
          component={MainScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Icon name='star' color={color} size={size} />,
          }}
          name='즐겨찾기'
          component={FavoriteScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Icon name='alarm' color={color} size={size} />,
          }}
          name='구독'
          component={SubscribeScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Icon name='notifications' color={color} size={size} />,
          }}
          name='알림'
          component={AlarmScreen}
        />

        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Icon name='more-horiz' color={color} size={size} />,
          }}
          name='더보기'
          component={MoreScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigator
