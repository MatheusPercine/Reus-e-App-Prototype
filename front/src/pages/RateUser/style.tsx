import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Screen = styled.View `
    flex: auto;
    background-color: #0F151A;
`

export const Question_Text = styled.View `
    color: white;
    font-family: Exo2;
    font-size: 22px;
    margin-top: ${hp('5,9241%')}; 
    margin-left: ${wp('7%')};
`

export const ProfileImage = styled.Image `
    margin-left: ${wp('30,7692 %')};
    margin-top: ${hp('10,7819 %')}; 
`

export const Group_Of_Stars = styled.View `
    flex-direction: row;
    margin-top: ${hp('5,9241 %')}; 
    margin-left: ${wp('27,6923 %')};
`

export const Star_Button = styled.TouchableOpacity `
    margin-left: ${wp('3 %')};
`

export const Rate_Button = styled.TouchableOpacity `
    margin-left: ${wp('17,9487 %')};
    margin-top: ${hp('10,7819 %')};
    height: ${hp('7,9383 %')};
    width: ${wp('64,1025 %')};
    background-color: #D92641;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Rate_Button_Text = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 24;
    font-weight: normal;
`