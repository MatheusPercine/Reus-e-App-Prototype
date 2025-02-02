import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const StartBtn = styled.TouchableOpacity`
background-color:#D92641;
border-radius:20;
height:50;
justify-content:center;
align-items:center;
margin-bottom:${hp('8%')}
margin-right:${wp('7%')}
margin-left:${wp('7%')}
`
export const OnboardingText = styled.Text`
font-size:32px;
color:white;
font-family:Exo2;
font-weight:regular;
`
export const TextView = styled.View`
margin-top:${hp('32%')}
flex:1;
margin-right:${wp('7%')}
margin-left:${wp('7%')}
`

export const BtnText = styled.Text`
font-size:20;
color:white;
font-family:Exo2;
font-weight:regular;
`

