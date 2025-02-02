import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Screen = styled.View `
    flex: auto;
    background-color: #0F151A;
`

export const ProductField = styled.View `
    margin-top: ${hp('5,9241 %')};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    height: ${hp('25 %')};
`

export const ProductPhoto_ProductInfo_HeartIcon = styled.View `
    flex-direction: row;
`

export const ProductInfo_And_HeartIcon = styled.View `
    margin-left: ${wp('2,8205 %')};
`

export const ImageProduct = styled.Image `
    margin-left: ${wp('7 %')};
    margin-top: ${hp('1,7772 %')};
`

export const ProductTitle_And_HeartIcon = styled.View `
    flex-direction: row;
`

export const ProductTitle = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 18px;
    margin-top: ${hp('1,7772 %')};
    margin-right: ${wp('6,4102 %')};
`

export const HeartIcon = styled.TouchableOpacity `
    margin-top: ${hp('0.5 %')};
`

export const Price = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 24px;
    font-weight: 500;
    margin-top: ${hp('2,9620 %')};
`

export const Number_Of_Units_Per_Order = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
    margin-top: ${hp('0.5 %')};
`

export const Publication_Date = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
    margin-top: ${hp('3,9099 %')};
`

export const Username_And_UserInfo = styled.View `
    margin-left: ${wp('7 %')};
`

export const Username = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
    margin-top: ${hp('1,4218 %')};
`

export const UserLocation_And_UserRating = styled.View `
    flex-direction: row;
    margin-top: ${hp('0.5 %')};
`

export const UserLocation = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
`

export const NumberRating_And_StarIcon = styled.View `
    flex-direction: row;
    margin-left: ${wp('4,1025 %')};
`

export const NumberRating = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
    margin-right: ${wp('1,0256 %')};
`