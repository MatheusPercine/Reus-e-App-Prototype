import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ProductField, ProductPhoto_And_ProductInfo, Screen, ImageProduct, ProductInfo, ProductTitle, Number_Of_Units_Per_Order, Price, RemoveAd_And_EditAd_Field, RemoveAd_Button, RemoveAd_Field, EditAd_Text, EditAd_Button, RemoveAd_Text } from './style';
import { Ionicons } from '@expo/vector-icons';

export default function ProductFieldMyAds() {
    return (

        <ProductField>

            <ProductPhoto_And_ProductInfo>

                <View>
                    <TouchableOpacity>
                        <ImageProduct source={require('../../assets/product18.png')} style={{ width: 113, height: 113 }} />
                    </TouchableOpacity>
                </View>

                <ProductInfo>
                    <TouchableOpacity>
                        <ProductTitle>Controle Xbox sem fio</ProductTitle>
                    </TouchableOpacity>
                    <Price>R$ 140</Price>
                    <Number_Of_Units_Per_Order>1 Unidade</Number_Of_Units_Per_Order>
                </ProductInfo>


            </ProductPhoto_And_ProductInfo>

            <RemoveAd_And_EditAd_Field>

                <RemoveAd_Field>

                    <RemoveAd_Button>
                        <Ionicons name="ios-trash-sharp" size={20} color="white" />
                        <RemoveAd_Text>Remover Anúncio</RemoveAd_Text>
                    </RemoveAd_Button>


                </RemoveAd_Field>

                <EditAd_Button>
                    <EditAd_Text>Editar Anúncio</EditAd_Text>
                </EditAd_Button>

            </RemoveAd_And_EditAd_Field>

        </ProductField>


    );
}