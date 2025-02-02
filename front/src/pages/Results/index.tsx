import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FilterView, PageText, SearchBox } from "./style";
import { HomeBackground } from "../Home/style";
import { AntDesign } from '@expo/vector-icons';
import RstsSearchBar from "../../components/RstsSearchBar";
import { MaterialIcons } from '@expo/vector-icons';
import HomeProduct from "../../components/HomeProduct";



export default function Results() {
    return (
        <HomeBackground>
            <LinearGradient
                colors={['#1C0029', '#D92641']}
                style={{
                    width: '100%',
                    alignItems: "center",
                    justifyContent: "center",
                }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}>
                <SearchBox>
                    <RstsSearchBar />
                </SearchBox>
            </LinearGradient>
            <FilterView>
                <TouchableOpacity>
                <View style={{flexDirection:"row"}}>
                <PageText style={{fontSize:20}}>Resultados</PageText>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
                </View>
                </TouchableOpacity>
            <AntDesign name="filter" size={24} color="white" />
            </FilterView>
            <ScrollView horizontal={false}>
             <HomeProduct/>
             <HomeProduct/>
             <HomeProduct/>
             <HomeProduct/>
             <HomeProduct/>
             <HomeProduct/>
            </ScrollView>

        </HomeBackground>


    )
}
