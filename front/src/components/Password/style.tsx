import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const InputStyle = styled.TextInput`
color:white;
font-family:Exo2;
font-size:18;
font-weight:normal;
border:white;
border-radius:10;
height:40;
width:342;
padding-left:${wp('7%')};
margin-left:${wp('7%')};
margin-right:${wp('7%')};
`
export const InputTitle = styled.Text`
color:white;
font-family:Exo2;
font-size:20;
font-weight:normal;
margin-left:${wp('7%')}
margin-top:${wp('4%')}
`

