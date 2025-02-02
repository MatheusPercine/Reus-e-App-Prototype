import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const BuyBar = styled.View`
background-image: linear-gradient(to right, #1C0029, #D92641);
flex-direction:row
justify-content:space-between
align-items:center
padding-right:${wp('7%')}
padding-left:${wp('7%')}
width:${wp("100%")}
position:fixed
bottom:59
height:${hp('7.1%')}

`
export const BuyBtn=styled.TouchableOpacity`
background-color:#D92641
border-radius:20
justify-content:center
align-items:center
height:40
width:${wp('28%')}
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`
export const SelectAllView=styled.View`
flex-direction:row
gap:${wp('3%')}
`
export const Background=styled.View`
background-color:#243039
height:25%
margin-left:7%
margin-right:7%

align-items:center
justify-content:center
gap:${hp("3%")}
border-radius:10
`
export const TopView =styled.View`
justify-content:center
align-items:center
`
export const BotView=styled.View`
flex-direction:row
alignt-items:center
justify-content:space-around

`
export const YesBtn=styled.TouchableOpacity`
background-color:#D92641
border-radius:20
height:40
width:${wp('28%')}
justify-content:center
align-items:center
`
export const NoBtn=styled.TouchableOpacity`
justify-content:center
align-items:center
height:40
width:${wp('28%')}
`
export const Overlay=styled.View`
flex:1
justify-content:center
alignt-items:center
`
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