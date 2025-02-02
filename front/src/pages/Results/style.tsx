import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const SearchBox=styled.View`
justify-content:center
align-items:center
width:${wp('100%')}
height:${hp('8%')}
`
export const FilterView=styled.View`
align-items:center
justify-content:space-between
padding-left:${wp('7%')}
padding-right:${wp('7%')}
width:${wp('100%')}
height:${hp('6%')}
background-color:#0F151A
flex-direction:row
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const PageText=styled.Text`
font-family:Exo2
color:white
`

