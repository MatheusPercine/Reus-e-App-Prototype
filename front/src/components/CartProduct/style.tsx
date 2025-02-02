import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const CartProductView=styled.View`
padding-top:${hp('3.5%')}
background-color:#0F151A
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const CartProductImg=styled.Image`
height:100
width:100
margin-bottom:${hp('3.5%')}
margin-left:${wp('2%')}
`
export const CpTopView=styled.View`
flex-direction:row
padding-left:${wp('7%')}
padding-right:${wp('7%')}
align-items:center
margin-bottom:${hp('3.5%')}
`
export const CpBottomView=styled.View`
flex-direction:row
justify-content:space-between
padding-left:${wp('7%')}
padding-right:${wp('7%')}
`
export const CpBottomLeft=styled.View`
flex-direction:row
`
export const CpBottomRight=styled.View`
flex-direction:column
`
export const BotRightBtns=styled.View`
flex-direction:row
justify-content:space-between
margin-top:${hp('3.5%')}
`
export const QuantitySelector=styled.View`
flex-direction:row
border:white
border-radius:20
justify-content:space-between
padding-left:${wp('2%')}
padding-right:${wp('2%')}
align-items:center
width:${wp('15.4%')}
height:20
`