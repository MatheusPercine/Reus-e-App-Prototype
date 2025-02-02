import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Group_Of_Stars, ProfileImage, Question_Text, Rate_Button, Rate_Button_Text, Screen, Star_Button } from './style';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function RateUser() {
    const navigation = useNavigation();
    return (

        <Screen>

            <Question_Text>Deseja avaliar sharinganzinho?</Question_Text>

            <ProfileImage source={require('../../assets/profilepicture9.png')} style={{ width: 150, height: 150 }} />

            <Group_Of_Stars>

                <Star_Button>
                    <FontAwesome name="star" size={20} color="yellow" />
                </Star_Button>

                <Star_Button>
                    <FontAwesome name="star" size={20} color="yellow" />
                </Star_Button>

                <Star_Button>
                    <FontAwesome name="star" size={20} color="yellow" />
                </Star_Button>

                <Star_Button>
                    <FontAwesome name="star" size={20} color="yellow" />
                </Star_Button>

                <Star_Button>
                    <FontAwesome name="star" size={20} color="yellow" />
                </Star_Button>

            </Group_Of_Stars>

            <Rate_Button onPress={()=>navigation.navigate('Histórico de compras')}>
                <Rate_Button_Text>Avaliar</Rate_Button_Text>
            </Rate_Button>

        </Screen>
    );
}