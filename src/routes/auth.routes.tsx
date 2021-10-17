import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'


const { Navigator, Screen } = createNativeStackNavigator()

const AuthRoutes = () => {
  return (
    <Navigator 
      initialRouteName='SignIn'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}

export default AuthRoutes