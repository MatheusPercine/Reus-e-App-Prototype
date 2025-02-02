import { InputStyle, InputTitle } from "./style";
import { Text, View } from "react-native";
import React from "react";

export default function Email() {
    return (
        <View>
            <InputTitle>E-mail</InputTitle>
            <InputStyle placeholder="E-mail" />
        </View>
    )
}