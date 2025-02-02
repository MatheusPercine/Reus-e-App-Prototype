import { StatusBar } from 'expo-status-bar';
import { TextInput, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import {
    LoginBackground,
    ReuseIconNoText,
    FirstContent,
    FirstContentText,
    InputView,
    SignInBtn,
    BtnTxt,
    LoginGuest,
    FooterText,
    SuBtnTxt,
    DontHaveAnAcc,
    SecondContent,
    BtnView
} from "./style";
import Email from "../../components/Email";
import Password from "../../components/Password";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();

    return (
        <LoginBackground>
            <FirstContent>
                <ReuseIconNoText source={require('../../assets/ReuseIconNoText.svg')} />
                <FirstContentText>Entre monte seu Setup ideal!</FirstContentText>
                <InputView>
                    <Email />
                    <Password />
                </InputView>
                <BtnView>
                    <SignInBtn onPress={()=>navigation.navigate('BottomTab')}>
                        <BtnTxt>Entrar</BtnTxt>
                    </SignInBtn>
                </BtnView>

                <LoginGuest>
                    <BtnTxt onPress={()=>navigation.navigate('BottomTab')}>
                        Entrar como visitante
                    </BtnTxt>
                </LoginGuest>
            </FirstContent>
            <SecondContent>
                <FooterText>
                    Não possui conta?
                </FooterText>
                <DontHaveAnAcc>
                    <TouchableOpacity onPress={()=>navigation.navigate('Cadastre-se')}>
                        <SuBtnTxt>Cadastre-se</SuBtnTxt>
                    </TouchableOpacity>
                    <FooterText>aqui!</FooterText>
                </DontHaveAnAcc>
            </SecondContent>
        </LoginBackground>

    )
}

