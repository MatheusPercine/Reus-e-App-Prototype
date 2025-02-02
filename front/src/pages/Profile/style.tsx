import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Screen = styled.View `
    flex: auto;
    background-color: #0F151A;
`

export const Profile_Status_Field = styled.View `
    background-image: linear-gradient(to right, #1C0029, #D92641);
    height: ${hp('38,5071 %')};
`

export const ProfileImage = styled.Image `
    margin-left: ${wp('24,3589 %')};
    margin-right: ${wp('24,3589 %')};
    margin-top: ${hp('3.9099 %')};
`

export const ProfileText = styled.Text `
    margin-left: ${wp('40,5128 %')};
    margin-right: ${wp('40,5128 %')};
    margin-top: ${hp('0,5924 %')};
    color: white;
    font-family: Exo2;
    font-size: 20px;
`

export const ProfileInfo = styled.View `
    flex-direction: row;
`

export const NumberRating_And_StarIcon = styled.View `
    flex-direction: row;
    margin-left: ${wp('33,3333 %')};
    margin-top: ${hp('1.5 %')};
`

export const NumberRating = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 15px;
    margin-right: ${wp('1.5 %')};
`

export const TextRating = styled.Text `
    margin-left: ${wp('33,0769 %')};
    color: white;
    font-family: Exo2;
    font-size: 10px;
`

export const NumberOfItensSelled_And_Text = styled.View `
    margin-top: ${hp('1.5 %')};
    margin-left: ${wp('11,2820 %')};
`

export const NumberOfItensSelled = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 15px;
    margin-left: ${wp('8,2051 %')};
`

export const Itens_Selled_Text = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
`

export const Button_Style1 = styled.TouchableOpacity `
    flex-direction: row;
    margin-left: ${wp('7%')};
    margin-right: ${wp('7%')};
    margin-top: ${hp('7,1090 %')};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    height: ${hp('5,3317 %')};
`

export const ButtonIcon_And_ButtonText_Style1 = styled.View `
    flex-direction: row;
    padding-left: ${wp('3.5 %')};
    padding-top: ${hp('1 %')};
`

export const ButtonText_Style1 = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20px;
    margin-left:  ${wp('23,3333 %')};
    padding-top: ${hp('0.5 %')};
`

export const Button_Style2 = styled.TouchableOpacity `
    margin-left: ${wp('7%')};
    margin-right: ${wp('7%')};
    margin-top: ${hp('3,3175 %')};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    height: ${hp('5,3317 %')};
    display: flex;
    justify-content: center;
    align-items: center;

`
export const ButtonText_Style2 = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20px;
`

export const Button_Style3 = styled.TouchableOpacity `
    flex-direction: row;
    margin-left: ${wp('7%')};
    margin-right: ${wp('7%')};
    margin-top: ${hp('3,3175 %')};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    height: ${hp('5,3317 %')};
`

export const ButtonIcon_And_ButtonText_Style2 = styled.View `
    flex-direction: row;
    padding-left: ${wp('3.5 %')};
    padding-top: ${hp('1 %')};
`

export const ButtonText_Style3 = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20px;
    margin-left:  ${wp('16,6666 %')};
    padding-top: ${hp('0.5 %')};
`






