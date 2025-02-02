import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const PopUp=styled.View`
justify-content:center
align-items:center
background-color: #243039
height:34%
margin-left:7%
margin-right:7%
border-radius:10
margin-top:60%
`
export const ClosePopUp=styled.TouchableOpacity`
border-radius:20
background-color:#D92641
height:40
width:${wp('56%')}
justify-content:center
align-items:center
margin-top:${hp('4%')}
`