import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NumberRating, NumberRating_And_StarImage, Number_Of_Units_Asked_And_TotalSpent_Background, Number_Of_Units_Asked_And_TotalSpent_Container, Number_Of_Units_Asked_Text, Number_Of_Units_Per_Order, Price, ProductInfo, ProductPhoto_And_ProductInfo, ProductTitle, ProfilePictureImage, ProfilePicture_And_Username_And_UserInfo,ProfilePicture_Username__UserInfo_And_RateButton, Profile_And_RateButton_And_Product, PurchaseInfo, Rate_Button, Rate_Text, Screen, StarImage, TotalSpent_Text, Username, Username_And_UserInfo } from './style';

export default function PurchaseInfoComponent () {
    const navigation = useNavigation();
    return (
        
        <PurchaseInfo>


        <Profile_And_RateButton_And_Product>

            <ProfilePicture_Username__UserInfo_And_RateButton>
                
                <ProfilePicture_And_Username_And_UserInfo>

                    <TouchableOpacity>
                        <ProfilePictureImage source={require('../../assets/profilepicture6.png')} style={{ width: 35, height: 35 }} />
                    </TouchableOpacity>
                    
                    
                    <Username_And_UserInfo>

                        <TouchableOpacity>
                            <Username>shariganzinho</Username>
                        </TouchableOpacity>

                        <NumberRating_And_StarImage>
                            <NumberRating>4.9</NumberRating>
                            <StarImage source={require('../../assets/star.png')} style={{ width: 10, height: 10 }} />
                        </NumberRating_And_StarImage>


                    </Username_And_UserInfo>

                </ProfilePicture_And_Username_And_UserInfo>
                <Rate_Button onPress={()=>navigation.navigate('Avaliar')}>

                    <Rate_Text>Avaliar</Rate_Text>
                </Rate_Button>

            </ProfilePicture_Username__UserInfo_And_RateButton>


            <ProductPhoto_And_ProductInfo>

                <TouchableOpacity onPress={()=>navigation.navigate('Produto')}>
                    <Image source={require('../../assets/product4.png')} style={{ width: 100, height: 100 }} />
                </TouchableOpacity>

                <ProductInfo>
                    <TouchableOpacity onPress={()=>navigation.navigate('Produto')}>
                        <ProductTitle>Processador i5 - Intel</ProductTitle>
                    </TouchableOpacity>
                    <Price>R$ 490</Price>
                    <Number_Of_Units_Per_Order>1 Unidade</Number_Of_Units_Per_Order>
                </ProductInfo>

            </ProductPhoto_And_ProductInfo>

        </Profile_And_RateButton_And_Product>


        <Number_Of_Units_Asked_And_TotalSpent_Background>

            <Number_Of_Units_Asked_And_TotalSpent_Container>

                <Number_Of_Units_Asked_Text>1 item</Number_Of_Units_Asked_Text>
                <TotalSpent_Text>Total do pedido: R$ 490</TotalSpent_Text>

            </Number_Of_Units_Asked_And_TotalSpent_Container>


        </Number_Of_Units_Asked_And_TotalSpent_Background>


    </PurchaseInfo>

    );
}