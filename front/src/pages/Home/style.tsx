import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const HomeBackground=styled.View`
background-color:#0F151A;
flex:1
`

export const SearchView=styled.View`
border:white
height:40;
width:${wp('87%')}
flex-direction:row;
border-radius:10;
align-items:center;
justify-content:space-between;
margin-top:${hp('11%')}
`
export const SearchInput=styled.TextInput`
color:white;
font-family:Exo2;
font-size:20;
padding-left:${wp('3%')}
width:${wp('100%')}
height:40;
border-radius:10
`
export const SearchIcon=styled.TouchableOpacity`
justify-content:center;
align-items:center;
padding-right:3%;
`

export const AppIcon=styled.Image`
height:45;
width:45;
`
export const AppBtnTxt=styled.Text`
font-family:Exo2;
font-size:10;
color:white;
`
export const ProductsContent=styled.View`
flex:1
`
export const ProductViewTitle=styled.Text`
font-family:Exo2;
font-size:20;
color:white
margin-left:${wp('7%')}
margin-top:${hp('2%')}
`
export const RecentlyAdded=styled.View`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const YourRegion=styled.View`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`