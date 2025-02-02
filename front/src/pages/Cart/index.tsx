import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { ScrollView, View, CheckBox, TouchableOpacity, Modal, Image } from "react-native"
import CartProduct from "../../components/CartProduct"
import ConfirmPurchase from "../../components/BankSlipSend"
import { PageText } from "../Results/style"
import { BuyBar, BuyBtn, SelectAllView, Background, BotView, NoBtn, TopView, YesBtn, Overlay, ClosePopUp, PopUp}  from "./style"
import BankSlipSend from "../../components/BankSlipSend"
export default function Cart() {
    const [modalVisible, setModalVisible] = useState(false);
    const [bankslipVisible, setBankSlipVisible] = useState(false);
    
    return (
        <View style={{ backgroundColor: "#0F151A", flex: 1 }}>
            
                    
                    <Modal
                        transparent={true}
                        visible={bankslipVisible}>
                        
                        <PopUp>

                            <Image source={require('../../assets/Ok.png')}
                                style={{ width: 90, height: 90 }} />
                            <PageText style={{ fontSize: 18, fontWeight: "bold" }}>Tudo certo!</PageText>
                            <PageText
                                style={{ marginTop: "4%" }}>Te enviamos um boleto por email</PageText>
                            <PageText >referente a sua compra!</PageText>
                            <ClosePopUp onPress={() => setBankSlipVisible(!bankslipVisible)}>
                                <PageText style={{ fontSize: 20 }}>
                                    Fechar
                                </PageText>
                            </ClosePopUp>
                        </PopUp>
                    </Modal>
                    
            <ScrollView horizontal={false}>
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
            </ScrollView>
            <BuyBar>
                <SelectAllView>
                    <CheckBox />
                    <PageText style={{ fontSize: 10 }} >Selecionar tudo</PageText>
                </SelectAllView>
                <BuyBtn onPress={() => setBankSlipVisible(!modalVisible)}>
                    <PageText style={{ fontSize: 20 }}>Comprar</PageText>
                </BuyBtn>

            </BuyBar>
        </View>
    )
}