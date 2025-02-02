import { useNavigation } from "@react-navigation/native";
import React from "react"
import { ImageBackground, Text, View } from "react-native"
import { BtnText, OnboardingText, StartBtn, TextView } from "./style"

export default function Onboarding() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../../assets/OnBoardingBackground.svg')}
            resizeMode="cover" style={{ flex: 1, margin:-10 }}>
            <TextView>
                <OnboardingText>Tenha acesso a</OnboardingText>
                <OnboardingText>milhares hardware ou</OnboardingText>
                <OnboardingText>periféricos por um</OnboardingText>
                <OnboardingText>excelente preço!</OnboardingText>
                <OnboardingText>Ou...</OnboardingText>
                <OnboardingText>Ganhe uma grana</OnboardingText>
                <OnboardingText>dando um novo dono</OnboardingText>
                <OnboardingText>para suas peças!</OnboardingText>
            </TextView>
            <StartBtn onPress={()=>navigation.navigate('Login')}>
                <BtnText>Começar</BtnText>
            </StartBtn>
        </ImageBackground>
    )
}
