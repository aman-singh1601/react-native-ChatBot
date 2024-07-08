import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Router } from './Routes/Router'
import { PaperProvider,
  MD3DarkTheme as defaultTheme
} from 'react-native-paper'

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors
  }
}


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Router />
    </PaperProvider>
  )
}

const styles = StyleSheet.create({})