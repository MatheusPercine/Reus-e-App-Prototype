import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Button, ButtonText, InputField_Style1, InputField_Style2, InputTitle, InputTitle_And_InputField_Style1, InputTitle_And_InputField_Style2, Screen, Section_InsertPhotos, Section_InsertPhotos_Button, Section_InsertPhotos_Text, ViewButton } from './style';

export default function InsertAd() {
    return (
        <Screen>

            <Section_InsertPhotos>
                <Section_InsertPhotos_Button>
                    <Image source={require('../../assets/Camera.png')} style={{ width: 90, height: 90 }} />
                    <Section_InsertPhotos_Text>Inserir Fotos</Section_InsertPhotos_Text>
                </Section_InsertPhotos_Button>
            </Section_InsertPhotos>

            <View>
                <InputTitle_And_InputField_Style1>
                    <InputTitle>Título do Anúncio*</InputTitle>
                    <InputField_Style1 placeholder='Ex: headset corsair'/>
                </InputTitle_And_InputField_Style1>

                <InputTitle_And_InputField_Style2>
                    <InputTitle>Descrição*</InputTitle>
                    <InputField_Style2 placeholder='Ex: Headset em ótimo estado!'/>
                </InputTitle_And_InputField_Style2>

                <InputTitle_And_InputField_Style2>
                    <InputTitle>Categoria*</InputTitle>
                    <InputField_Style1 placeholder='Ex: Periféricos' />
                </InputTitle_And_InputField_Style2>

                <InputTitle_And_InputField_Style2>
                    <InputTitle>Preço (R$)*</InputTitle>
                    <InputField_Style1 placeholder='Ex: R$200' />
                </InputTitle_And_InputField_Style2>
            </View>

            <ViewButton>
                <Button>
                    <ButtonText>Enviar anúncio</ButtonText>
                </Button>
            </ViewButton>

        </Screen>

    );
}
