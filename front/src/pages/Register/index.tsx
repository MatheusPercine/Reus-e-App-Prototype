import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import { InputTitle, Screen, InputField, Button, ButtonText, InputTitle_And_InputField } from './style';


export default function Register() {
    const navigation = useNavigation();
  return (
      <Screen>

            {/* <Header>

                <GoBackImage_And_HeaderText>

                    <TouchableOpacity>
                        <GoBackImage source={require('../../assets/goback.png')} style={{ width: 17, height: 17 }} />
                    </TouchableOpacity>

                    <HeaderText>Criar Conta</HeaderText>

                </GoBackImage_And_HeaderText>

            </Header> */}

            <View>

                <InputTitle_And_InputField>
                    <InputTitle>Nome de Usuário:</InputTitle>
                    <InputField placeholder='Nome de Usuário' />
                </InputTitle_And_InputField>

                <InputTitle_And_InputField>
                    <InputTitle>Nome:</InputTitle>
                    <InputField placeholder='Nome' />
                </InputTitle_And_InputField>

                <InputTitle_And_InputField>
                    <InputTitle>E-mail:</InputTitle>
                    <InputField placeholder='E-mail' />
                </InputTitle_And_InputField>

                <InputTitle_And_InputField>
                    <InputTitle>Data de nascimento:</InputTitle>
                    <InputField placeholder='DD/MM/AAAA' />
                </InputTitle_And_InputField>

                <InputTitle_And_InputField>
                    <InputTitle>CPF:</InputTitle>
                    <InputField placeholder='CPF' />
                </InputTitle_And_InputField>

                <InputTitle_And_InputField>
                    <InputTitle>Número de telefone:</InputTitle>
                    <InputField placeholder='Número de telefone' />
                </InputTitle_And_InputField>

                <InputTitle_And_InputField>
                    <InputTitle>Endereço:</InputTitle>
                    <InputField placeholder='Endereço' />
                </InputTitle_And_InputField>

                <InputTitle_And_InputField>
                    <InputTitle>Senha:</InputTitle>
                    <InputField placeholder='Senha' />
                </InputTitle_And_InputField>

                <InputTitle_And_InputField>
                    <InputTitle>Repetir Senha:</InputTitle>
                    <InputField placeholder='Repetir Senha' />
                </InputTitle_And_InputField>

            </View>


        <Button onPress={()=>navigation.navigate('Confirmação de E-mail')} >
            <ButtonText>Prosseguir</ButtonText>
        </Button>
      
      </Screen>
  );
}