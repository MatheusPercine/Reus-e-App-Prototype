import { InputStyle, InputTitle } from "./style";
import { View } from "react-native";
import React from "react";

export default function Password() {
    return (
        <View>
            <InputTitle>Senha</InputTitle>
            <InputStyle placeholder="Senha" secureTextEntry={true}/>
        </View>
    )
}