import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ButtonIcon_And_ButtonText_Style1, ButtonIcon_And_ButtonText_Style2, ButtonText_Style1, ButtonText_Style2, ButtonText_Style3, Button_Style1, Button_Style2, Button_Style3, Itens_Selled_Text, NumberOfItensSelled, NumberOfItensSelled_And_Text, NumberRating, NumberRating_And_StarIcon, ProfileImage, ProfileInfo, ProfileText, Profile_Status_Field, Screen, TextRating } from './style';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function Profile() {
    const navigation = useNavigation()
    return (
        <Screen>

            <Profile_Status_Field>

                <View>

                    <ProfileImage source={require('../../assets/profilepicture1.png')} style={{ width: 200, height: 200 }} />
                    <ProfileText>dioudlol</ProfileText>

                </View>


                <ProfileInfo>

                    <View>
                        <NumberRating_And_StarIcon>
                            <NumberRating>4.2</NumberRating>
                            <FontAwesome name="star" size={15} color="white" />
                        </NumberRating_And_StarIcon>

                        <TextRating>Avaliação</TextRating>
                    </View>

                    <NumberOfItensSelled_And_Text>
                        <NumberOfItensSelled>5</NumberOfItensSelled>
                        <Itens_Selled_Text>Itens Vendidos</Itens_Selled_Text>
                    </NumberOfItensSelled_And_Text>

                </ProfileInfo>

            </Profile_Status_Field>

            <View>
                
                <Button_Style1 onPress={()=>navigation.navigate('Favoritos')}>
                    <ButtonIcon_And_ButtonText_Style1>
                        <Foundation name="heart" size={30} color="white" />
                        <ButtonText_Style1>Favoritos</ButtonText_Style1>
                    </ButtonIcon_And_ButtonText_Style1>
                </Button_Style1>

                <Button_Style2 onPress={()=>navigation.navigate('Histórico de compras')}>
                    <ButtonText_Style2>Histórico de Compras</ButtonText_Style2>
                </Button_Style2>

                <Button_Style3 onPress={()=>navigation.navigate('Meus anúncios')}>
                    <ButtonIcon_And_ButtonText_Style2>
                        <MaterialCommunityIcons name="lead-pencil" size={30} color="white" />
                        <ButtonText_Style3>Meus Anúncios</ButtonText_Style3>
                    </ButtonIcon_And_ButtonText_Style2>
                </Button_Style3>

                <Button_Style2 onPress={()=>navigation.navigate('Login')}>
                    <ButtonText_Style2>Sair</ButtonText_Style2>
                </Button_Style2>

            </View>

        </Screen>
    );
}