import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

export default function App() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [edad, setEdad] = useState('');

    const enviarDatosAlBackend = () => {
        // Recolecta los datos de los TextInput
        const data = {
          nombre: nombre,
          descripcion: descripcion,
          edad: edad,

        };
     // Envía los datos al servidor
     axios.post('http://192.168.197.201:8000/api/servicios', data)
     .then((response) => {
       const mensaje = response.data.message;
       // Datos enviados con éxito	
       Alert.alert('Datos enviados con éxito', mensaje);
       setNombre('');
       setDescripcion('');
       setEdad('');
     })
     .catch(() => {
       // Maneja errores si es necesario
       Alert.alert('Error', 'No se pudo guardar');
       setNombre('');
       setDescripcion('');
       setEdad('');
     });
 };

 return (
    <View style={styles.container}>
        <Text style={styles.label}>Guardar datos en el Backend de Laravel</Text>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        placeholder="Descripcion"
        value={descripcion}
        onChangeText={(text) => setDescripcion(text)}
      />
      <Text style={styles.label}>Edad</Text>
      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType='number-pad'
        value={edad}
        onChangeText={(text) => setEdad(text)}
      />
      <Button title="Guardar" onPress={enviarDatosAlBackend} />
      <StatusBar style="auto" />
    </View>
  );

}

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


  

