import React from 'react';
import { View, Link, Alert, Dimensions, TextInput, StyleSheet, Text, Button } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { LinearGradient } from 'expo'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Login extends React.Component {
  render() {
    return (
      <View>
        <LinearGradient
          colors={['#5DB760', '#54D5E5']}
          style={{
            position: 'absolute',
            top:0,
            right:-30,
            bottom:0,
            left:-30,
            height: 1000,
          }}
        />
        <View style={styles.textfield}>
          <Text style={{ color: 'white',fontSize: 50, fontWeight: '500', bottom:10, }}>Consertaki!</Text>
          <Text style={{ color: 'white',fontSize: 24, fontWeight: '200' }}>Smartphones, Tablets,</Text>
          <Text style={{ color: 'white',fontSize: 24, fontWeight: '200' }}>Notebooks e Desktops</Text>
        </View>

        <View style={styles.login}>
        
          <View style={styles.input}>
            <Icon name="user" size={25} style={{position:'absolute', left:15,top:30,}} color="#DBDAE3" />
            <TextInput
              style={{padding:40,fontSize:20,}}
              placeholder={'CPF'}
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={styles.password}>
            <Icon name="lock" size={25} style={{position:'absolute', left:15,top:24,}} color="#DBDAE3" />
            <TextInput
              style={{padding:25, fontSize:20,}}
              placeholder={'Senha'}
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                Alert.alert("Clickou")
              }}
              title="ENTRAR"
              color="black"
            />
          </View>
        </View>
        <View style={styles.textfield2}>
        <Icon name="google" size={50} style={{position:'absolute',right:110,bottom:120}} color="#DD4D3E" />
        <Icon name="facebook" size={50} style={{position:'absolute',left:110,bottom:120}} color="#4B6FAA" />
          <Text style={{ color: 'white', bottom: 12, fontSize: 15, }}
            onPress={() => { Alert.alert("clickou") }}>
            Ainda nao e membro ?
          </Text>
          <Text style={{ color: 'white', fontSize: 20, }}
            onPress={() => { Alert.alert("clickou") }}>
            Cadastre-se
          </Text>
          <Text style={{ color: 'white', top: 10, fontSize: 20, }}
            onPress={() => { Alert.alert("clickou") }}>
            Esqueci minha senha
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  login: {
    flex: 1,
    height: null,
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: WIDTH - 60,
    height: 88,
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: 'white',
    color: 'red',
    bottom: 3,
  },
  input2: {
    width: WIDTH - 75,
    height: 85,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: 'white',
    color: 'red',
  },
  password: {
    width: WIDTH - 60,
    height: 85,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 16,
    backgroundColor: 'white',
    color: 'red',
    marginBottom: 200,
  },
  button: {
    backgroundColor: '#FAEA33',
    borderRadius: 20,
    padding: 6,
    height: 50,
    width: WIDTH - 60,
    bottom: 180,
  },
  textfield: {
    marginTop: 150,
    marginRight: 100,
  },
  textfield2: {
    alignItems: 'center',
    bottom: 100,
  }
})
