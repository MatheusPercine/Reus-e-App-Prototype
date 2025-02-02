import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Screen = styled.View `
    flex: auto;
    background-color: #0F151A;
`

// export const Header = styled.View `
//     background-image: linear-gradient(to right, #1C0029, #D92641);
//     width: ${wp('100 %')};
//     height: ${hp('8,0568 %')};
// `

// export const GoBackImage_And_HeaderText = styled.View `
//     flex-direction: row;
//     padding-left: ${wp('7 %')};
// `

// export const GoBackImage = styled.Image `
//     margin-top: ${hp('2.6 %')};
//     margin-right: ${wp('2,2 %')};
// `

// export const HeaderText = styled.Text `
//     color: white;
//     font-family: Exo2;
//     font-size: 20px;
//     margin-top: ${hp('2,9 %')};
// `

export const InputTitle_And_InputField = styled.View `
    margin-left: ${wp('7%')};
    margin-right: ${wp('7%')};
    margin-top: ${hp('3,5545 %')};
`

export const InputTitle = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20;
    font-weight: normal;
`

export const InputField = styled.TextInput `
    color: white;
    font-family: Exo2;
    font-size: 18;
    border: white;
    font-weight: normal;
    border-radius: 10px;
    height: 40px;
    padding-left: ${wp('7%')};
`

export const Button = styled.TouchableOpacity `
    margin-left: ${wp('7%')};
    margin-right: ${wp('7%')};
    margin-top: ${hp('4.7393%')};
    margin-bottom: ${hp('3.5545%')};
    height: ${hp('7,9383 %')};
    width: ${wp('87,6923 %')};
    background-color: #D92641;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonText = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 24;
    font-weight: normal;
`