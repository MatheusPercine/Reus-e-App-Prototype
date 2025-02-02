import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const SearchView=styled.View`
border:white
height:40;
width:${wp('87%')}
flex-direction:row;
border-radius:10;
align-items:center;
justify-content:space-between;
margin-top:${hp('4%')}
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