import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const TopView=styled.View`
flex-direction:row
padding-left:${wp('7%')}
padding-right:${wp('7%')}
margin-top:${wp('2%')}
`
export const BottomView=styled.View`
flex-direction:column
padding-left:${wp('7%')}
padding-right:${wp('7%')}
padding-bottom:${hp('2%')}
padding-top:${hp('2%')}
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const ProductImage=styled.Image`
width:140;
height:140;
`
export const ProductText=styled.Text`
font-family:Exo2;
color:white;
`
export const Icons=styled.TouchableOpacity`
justify-content:center;
align-items:center;
margin-top:${hp('0.3%')}`
