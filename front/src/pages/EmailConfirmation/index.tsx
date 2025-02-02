import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button, ButtonText, Field_Of_Text, Info, Screen } from './Style';

export default function EmailConfirmation() {
    const navigation = useNavigation();
    return (
        <Screen>

            {/* <Header>

                <GoBackImage_And_HeaderText>

                    <TouchableOpacity>
                        <GoBackImage source={require('../../assets/goback.png')} style={{ width: 17, height: 17 }} />
                    </TouchableOpacity>

                    <HeaderText>E-mail de Confirmação</HeaderText>

                </GoBackImage_And_HeaderText>

            </Header> */}

            <Field_Of_Text>
                <Info>Você recebeu um E-mail informando a situação do seu cadastro.</Info>
            </Field_Of_Text>
            <Button onPress={()=>navigation.navigate('Login')}>
                <ButtonText>Entendi</ButtonText>
            </Button>
        </Screen>
    );
}