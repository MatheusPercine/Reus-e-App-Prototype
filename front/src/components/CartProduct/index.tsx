import React from "react";
import { View, CheckBox, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'
import { CartProductImg, CartProductView, CpTopView, CpBottomView, CpBottomLeft, CpBottomRight, BotRightBtns, QuantitySelector  } from "./style";
import { PageText } from "../../pages/Results/style";
import { Ionicons } from '@expo/vector-icons';

export default function CartProduct() {
    return (
        <CartProductView>
            {/* View completa */}
            <CpTopView>
                <CheckBox />
                <Entypo name="shop" size={24} color="white"
                style={{marginLeft:'2%'}} />
                <PageText style={{marginLeft:'2%'}}>
                    claudinhogamer
                </PageText>
            </CpTopView>
            <CpBottomView style={{ flexDirection: "row" }}>
                <CpBottomLeft>
                {/* View da esquerda */}
                    <CheckBox />
                    <CartProductImg source={require('../../assets/Razer.png')} />
                </CpBottomLeft>
                {/* View da direita */}
                <CpBottomRight>
                    <PageText style={{fontSize:20}}>Mouse Razer usado</PageText>
                    <PageText style={{fontSize:24, fontWeight:"bold"}}>R$ 75</PageText>
                    {/* Botões em baixo na view direita */}
                    <BotRightBtns>
                        {/* botão remover compra */}
                        <TouchableOpacity style={{flexDirection:"row"}}>
                            <PageText style={{marginRight:"5%"}}>Remover</PageText>
                            <Ionicons name="ios-trash-sharp" size={20} color="white" />
                        </TouchableOpacity>

                        {/* seletor de quantidade */}
                        <QuantitySelector>
                            <TouchableOpacity >
                                <PageText style={{marginBottom:"70%", marginLeft:"-33%"}}>-</PageText>
                            </TouchableOpacity>
                                <Image source={require('../../assets/line.png')}
                                style={{height:20, width:2, marginRight:"15%"}}/>
                            <PageText>1</PageText>
                            <Image source={require('../../assets/line.png')}
                            style={{height:20, width:2,marginLeft:"15%" }}/>
                            <TouchableOpacity >
                                <PageText style={{marginBottom:"25%", marginLeft:"33%"}}>+</PageText>
                            </TouchableOpacity>
                        </QuantitySelector>
                    </BotRightBtns>
                </CpBottomRight>
            </CpBottomView>
        </CartProductView>
    )
}