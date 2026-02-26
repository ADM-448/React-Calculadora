import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function Calculadora() { 
  // Variáveis de estado para guardar os números digitados e o resultado
  const [num1, setNum1] = useState(''); 
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(0);

  // Funções contendo a lógica de cada operação matemática
  function somar() {
    const soma = parseFloat(num1) + parseFloat(num2);
    setResultado(soma);
  }

  function subtrair() {
    const sub = parseFloat(num1) - parseFloat(num2);
    setResultado(sub);
  }

  function multiplicar() {
    const mult = parseFloat(num1) * parseFloat(num2);
    setResultado(mult);
  }

  function dividir() {
    const div = parseFloat(num1) / parseFloat(num2);
    setResultado(div);
  }

  function expo() {
    let x = 1;

    for (let i = 0; i < parseFloat(num2); i++)
    {
      x = x * parseFloat(num1);  
    }  
    setResultado(x);
  }

  // A parte visual (TELA) que o React vai desenhar
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o 1º número"
        keyboardType="numeric"
        value={num1}
        onChangeText={(valor) => setNum1(valor)} // Atualiza o num1 quando digitar
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o 2º número"
        keyboardType="numeric"
        value={num2}
        onChangeText={(valor) => setNum2(valor)} // Atualiza o num2 quando digitar
      />

      {/* View para organizar os botões lado a lado */}
      <View style={styles.linhaDeBotoes}>
        <Button title="Somar (+)" onPress={somar} color="#4CAF50" />
        <Button title="Subtrair (-)" onPress={subtrair} color="#F44336" />
      </View>
      
      <View style={styles.linhaDeBotoes}>
        <Button title="Multiplicar (*)" onPress={multiplicar} color="#2196F3" />
        <Button title="Dividir (/)" onPress={dividir} color="#FF9800" />
      </View>
      
      <View style={styles.linhaDeBotoes}>
        <Button title="Potencia (^)" onPress={expo} color="#8a21f3ff" />
      </View>

      <Text style={styles.resultado}>
        Resultado: {resultado}
      </Text>
    </View>
  );
}

// Estilos para deixar a tela bonita e organizada
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela toda
    padding: 20,
    justifyContent: 'center', // Centraliza o conteúdo na vertical
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 18,
  },
  linhaDeBotoes: {
    flexDirection: 'row', // Coloca os itens (botões) um ao lado do outro
    justifyContent: 'space-between', // Espalha os botões com espaço entre eles
    marginBottom: 15,
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    color: '#000',
  }
});