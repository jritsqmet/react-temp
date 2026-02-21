import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import menu from "../assets/data/menu.json"
import Tarjeta from '../components/Tarjeta'

export default function ListaLocal() {
  return (
    <View>
      <Text>ListaLocal</Text>
      <FlatList 
        data = {menu}
        renderItem={ ( {item} )=> 
            <Tarjeta  informacion = {item}  />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})