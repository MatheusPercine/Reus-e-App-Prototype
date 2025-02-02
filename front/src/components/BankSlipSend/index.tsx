import { PageText } from "../../pages/Results/style";
import { Alert, Modal, TouchableOpacity, View, Image } from "react-native";
import { ClosePopUp, PopUp } from "./style"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function BankSlipSend() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <PopUp>

            <Image source={require('../../assets/Ok.png')}
                style={{ width: 90, height: 90 }} />
            <PageText style={{ fontSize: 18, fontWeight: "bold" }}>Tudo certo!</PageText>
            <PageText 
            style={{marginTop:"4%"}}>Te enviamos um boleto por email</PageText>
            <PageText >referente a sua compra!</PageText>
            <ClosePopUp onPress={() => setBankSlipVisible(!bankslipVisible)}>
                <PageText style={{ fontSize: 20 }}>
                    Fechar
                </PageText>
            </ClosePopUp>
        </PopUp>

    )
}