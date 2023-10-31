import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const ListaScreens = () => {
  return (
    <View>
      <Text style={styles.label}>Datos desde el Backend en Laravel</Text>
    </View>
  )
}

export default ListaScreens
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      width: 200,
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
      paddingLeft: 5,
    },
  });