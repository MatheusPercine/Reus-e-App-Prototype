import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { HeartIcon, ImageProduct, NumberRating, NumberRating_And_StarIcon, Number_Of_Units_Per_Order, Price, ProductField, ProductInfo_And_HeartIcon, ProductPhoto_ProductInfo_HeartIcon, ProductTitle, ProductTitle_And_HeartIcon, Publication_Date, Screen, UserLocation, UserLocation_And_UserRating, Username, Username_And_UserInfo } from './style';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function ProductFieldFavorites() {
    const navigation=useNavigation();

    return (

        <ProductField>

            <ProductPhoto_ProductInfo_HeartIcon>

                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Produto')}>
                        <ImageProduct source={require('../../assets/product13.png')} style={{ width: 140, height: 140 }} />
                    </TouchableOpacity>
                </View>

                <ProductInfo_And_HeartIcon>

                    <ProductTitle_And_HeartIcon>
                        <TouchableOpacity>
                            <ProductTitle onPress={()=>navigation.navigate('Produto')} >PC Gamer 16GB...</ProductTitle>
                        </TouchableOpacity>

                        <HeartIcon>
                            <Foundation name="heart" size={30} color="white" />
                        </HeartIcon>
                    </ProductTitle_And_HeartIcon>


                    <View>
                        <Price>R$ 5999</Price>
                        <Number_Of_Units_Per_Order>1 unidade</Number_Of_Units_Per_Order>
                    </View>

                    <Publication_Date>Publicado em 22/03 às 16:48</Publication_Date>
                </ProductInfo_And_HeartIcon>

            </ProductPhoto_ProductInfo_HeartIcon>

            <Username_And_UserInfo>

                <TouchableOpacity>
                    <Username>carlinhospernambucano</Username>
                </TouchableOpacity>

                <UserLocation_And_UserRating>
                    <UserLocation>São Paulo - SP</UserLocation>
                    <NumberRating_And_StarIcon>
                        <NumberRating>4.2</NumberRating>
                        <FontAwesome name="star" size={10} color="white" />
                    </NumberRating_And_StarIcon>
                </UserLocation_And_UserRating>

            </Username_And_UserInfo>

        </ProductField>

    );
}