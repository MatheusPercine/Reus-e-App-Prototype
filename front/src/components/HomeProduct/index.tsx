import React from "react";
import { TextInput, View, Image, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import { ProductImage, ProductText, TopView, BottomView, Icons } from "./style";
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function  HomeProduct(){
    const navigation = useNavigation();
    return(
        <View>
             <TopView>
                 <TouchableOpacity onPress={()=>navigation.navigate('Produto')}>

                    <ProductImage source={require('../../assets/SSD.png')} />
                 </TouchableOpacity>
                    <View style={{marginLeft:"4%"}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Produto')}>
                        <ProductText style={{fontSize:20}}>SSD nvme (seminovo)</ProductText>
                    </TouchableOpacity>
                        <View style={{ flexDirection: "row", justifyContent:"space-between", paddingRight:"4%"}}>
                            <ProductText style={{fontSize:22}}>R$ 250</ProductText>
                            <View style={{flexDirection:"row", gap:"10%"}}>
                            <Icons> 
                                <AntDesign name="hearto" size={20} color="white"
                                 />
                            </Icons>
                            <Icons>
                                <Entypo name="share" size={20} color="white" />
                            </Icons>
                            </View>
                        </View>
                        <View>
                            <ProductText >1 Unidade</ProductText>
                            <ProductText
                            style={{paddingTop:"30%"}}
                            >Publicado em 22/03 às 16:48</ProductText>

                        </View>
                    </View>

                </TopView>
                <BottomView>
                    <TouchableOpacity>
                <ProductText>carlinhospernambucano</ProductText>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        <ProductText>Olinda - PE</ProductText>
                        <ProductText style={{marginLeft:"8%"}}>4,2</ProductText>
                        <Entypo name="star" size={12} color="white" 
                        style={{marginTop:"0.5%",marginLeft:"1%"}}/>
                        </View>
                </BottomView>
        </View>
    )
}