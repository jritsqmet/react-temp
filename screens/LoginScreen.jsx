import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View>
      <Text>LoginScreen</Text>
      <TextInput
      placeholder='Ingresar correo:'
      />
    </View>
  )
}

const styles = StyleSheet.create({})