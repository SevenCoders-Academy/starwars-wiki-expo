import 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_600SemiBold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import { theme } from './src/styles'
import { Routes } from './src/routes'

// AsyncStorage.clear()

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
