import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import logoDado from '../assets/images/dado.png';

export default function Home() {
  const [inicio, setInicio] = useState('1');
  const [fim, setFim] = useState('6');
  const [sorteado, setSorteado] = useState(0);
  const sorteio = () => {
    const i = parseInt(inicio);
    const f = parseInt(fim);
    console.log('Clicou no botão sorteio');
    if (i > f) {
      Alert.alert('Erro', 'Intervalo inválido');
    } else {
      setSorteado(Math.floor(Math.random() * (f - i + 1) + i));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sorteio</Text>
      <Image style={styles.logo} source={logoDado} />
      <View style={styles.viewIntervalo}>
        <TextInput
          style={styles.textInput}
          label="Início"
          value={inicio}
          onChangeText={setInicio}
          selectionColor="green"
          underlineColor="green"
          underlineColorAndroid="green"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInput}
          label="Fim"
          value={fim}
          onChangeText={setFim}
          selectionColor="green"
          underlineColor="green"
          underlineColorAndroid="green"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.viewSorteado}>
        <Text style={styles.textSorteado}>{sorteado !== 0 ? sorteado : '--'}</Text>
      </View>
      <Button onPress={sorteio} mode="contained" color="green">
        Próximo Número
      </Button>
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
  logo: {
    marginBottom: 30,
    tintColor: 'green',
  },
  titulo: {
    color: 'green',
    fontSize: 25,
    marginBottom: 10,
  },
  viewIntervalo: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  textInput: {
    fontSize: 15,
    width: 140,
    color: 'green',
  },
  viewSorteado: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: 300,
    height: 300,
    marginBottom: 30,
    borderRadius: 150,
  },
  textSorteado: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 120,
  },
});
