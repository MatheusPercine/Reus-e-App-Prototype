import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

export const LoginBackground = styled.View`
background-color:#0F151A;
flex:1
align-items:center
`
export const ReuseIconNoText = styled.Image`
height:158;
width:158;
margin-top:${hp('15%')}

`
export const FirstContent = styled.View`
align-items:center;
justify-content:center;

`
export const FirstContentText=styled.Text`
font-family:Exo2;
font-weight:regular;
color:white;
font-size:20;
`
export const InputView = styled.View`
margin-top:${hp('10%')}
`
export const SignInBtn = styled.TouchableOpacity`
background-color:#D92641;
border-radius:20
height:40;
width:${wp('87%')};
align-items:center;
justify-content:center;
margin-top:${hp('4%')}
`
export const BtnTxt = styled.Text `
font-family:Exo2;
color:white;
font-size:20;
`
export const BtnView=styled.View`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding-bottom:${hp('5%')};
width:100%
align-items:center;
`
export const LoginGuest = styled.TouchableOpacity`
background-color:#D92641;
width:${wp('87%')};
height:40
margin-top:${hp('3%')}
border-radius:20;
justify-content:center;
align-items:center;
`
export const FooterText = styled.Text`
font-family:Exo2;
font-size:14;
color:white;
`
export const SuBtnTxt = styled.Text`
font-family:Exo2;
font-size:14;
font-weight:bold;
color:#D92641;
`
export const DontHaveAnAcc = styled.View`
flex-direction:row;
gap:${wp('1%')}
`
export const SecondContent = styled.View`
margin-top:${hp('3%')}

`
