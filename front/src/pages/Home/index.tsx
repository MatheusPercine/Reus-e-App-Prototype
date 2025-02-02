import React from "react";
import { TextInput, View, Image, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import { AppBtnTxt, AppIcon, HomeBackground, ProductsContent, ProductViewTitle, RecentlyAdded, SearchIcon, SearchInput, SearchView, YourRegion } from "./style";
import { TouchableOpacity } from "react-native";
import HomeProduct from "../../components/HomeProduct";
import SearchBar from "../../components/SearchBar";


export default function Home() {
    return (
        <HomeBackground>

            <LinearGradient
                colors={['#1C0029', '#D92641']}
                style={{
                    width: '100%', height: '20%',
                    alignItems: "center",
                    
                }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}>
                <SearchBar />
                <ScrollView horizontal={true}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: 9,
                        paddingBottom: 9,
                        marginTop: "3%",
                        marginLeft: "12%"
                    }}>
                        <TouchableOpacity style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "2.8%",
                        }} >
                            <AppIcon source={require('../../assets/VideoCard.svg')} />
                            <AppBtnTxt>Placa de vídeo</AppBtnTxt>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "5.4%"
                        }}>
                            <AppIcon source={require('../../assets/Processor.svg')} />
                            <AppBtnTxt>Processador</AppBtnTxt>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "7.4%"
                        }}>
                            <AppIcon source={require('../../assets/MemorySlot.svg')} />
                            <AppBtnTxt>RAM</AppBtnTxt>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "2.6%"
                        }}>
                            <AppIcon source={require('../../assets/Motherboard.svg')} />
                            <AppBtnTxt>Placa mãe</AppBtnTxt>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "2.3%"
                        }}>
                            <AppIcon source={require('../../assets/HDD.svg')} />
                            <AppBtnTxt>Armazenamento</AppBtnTxt>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <AppIcon source={require('../../assets/Headphones.svg')} />
                            <AppBtnTxt>Periféricos</AppBtnTxt>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </LinearGradient>
            <RecentlyAdded>
                <ProductViewTitle>
                    Adicionados recentemente
                </ProductViewTitle>
                <ScrollView horizontal={true}>
                    <HomeProduct />
                    <HomeProduct />
                    <HomeProduct />
                </ScrollView>
            </RecentlyAdded>
                    <YourRegion>
                <ProductViewTitle>
                    Sua Região
                </ProductViewTitle>
                <ScrollView horizontal={true}>
                    <HomeProduct />
                    <HomeProduct />
                    <HomeProduct />
                </ScrollView>
                    </YourRegion>
    
        </HomeBackground >
    )
}