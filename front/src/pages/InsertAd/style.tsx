import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Screen = styled.View `
    flex: auto;
    background-color: #0F151A;
`

export const Section_InsertPhotos = styled.View `
    background-image: linear-gradient(to right, #1C0029, #D92641);
    height: ${hp('22.9857 %')};
`

export const Section_InsertPhotos_Button = styled.TouchableOpacity `
    border: white;
    border-radius: 10px;
    margin-left: ${wp('5.3317 %')};
    margin-right: ${wp('5.3317 %')};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${hp('2.6066 %')};
    height: ${hp('17.7725 %')};
`

export const Section_InsertPhotos_Text = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
    font-weight: normal;
`

export const InputTitle_And_InputField_Style1 = styled.View `
    margin-left: ${wp('7%')};
    margin-right: ${wp('7%')};
    margin-top: ${hp('4.7393 %')};
`

export const InputTitle = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20px;
    font-weight: normal;
`

export const InputField_Style1 = styled.TextInput `
    color: white;
    font-family: Exo2;
    font-size: 18px;
    border: white;
    font-weight: normal;
    border-radius: 10px;
    height: ${hp('4.8 %')};
    padding-left: ${wp('7%')};
`

export const InputTitle_And_InputField_Style2 = styled.View `
    margin-left: ${wp('7%')};
    margin-right: ${wp('7%')};
    margin-top: ${hp('4.7393 %')};
`

export const InputField_Style2 = styled.TextInput `
    color: white;
    font-family: Exo2;
    font-size: 18px;
    border: white;
    font-weight: normal;
    border-radius: 10px;
    height: ${hp('12,6777 %')};
    padding-left: ${wp('7%')};
`

export const ViewButton = styled.View `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.TouchableOpacity `
    margin-left: ${wp('7%')};
    margin-right: ${wp('7%')};
    margin-top: ${hp('3,5545 %')};
    margin-bottom: ${hp('3.5545 %')};
    height: ${hp('5,3317 %')};
    width: ${wp('87 %')};
    background-color: #D92641;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonText = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20px;
    font-weight: normal;
`
