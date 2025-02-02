import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Screen = styled.View `
    flex: auto;
    background-color: #0F151A;
`

export const PurchaseInfo = styled.View `
    height: ${hp('24.7 %')};
    margin-top: ${hp('5,9241 %')};
`

export const Profile_And_RateButton_And_Product = styled.View `
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    height: ${hp('20,3791 %')};
`

export const ProfilePicture_Username__UserInfo_And_RateButton = styled.View `
    flex-direction: row;
`

export const ProfilePicture_And_Username_And_UserInfo = styled.View `
    flex-direction: row;
    margin-left: ${wp('7 %')};
    margin-top: ${hp('0.2369 %')};
    margin-right: ${wp('22.564102564102 %')};
`

export const ProfilePictureImage = styled.Image `
    margin-right: ${wp('1,0257 %')};
`

export const Username_And_UserInfo = styled.View `
    margin-top: ${hp('0.3 %')};
`

export const Username = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
`

export const NumberRating_And_StarImage = styled.View `
    flex-direction: row;
    margin-top: ${hp('0.55 %')};
`

export const NumberRating = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
    margin-right: ${wp('1 %')};
`

export const StarImage = styled.Image `
    margin-top: ${hp('0.1 %')};
`

export const Rate_Button = styled.TouchableOpacity `
    height: ${hp('4,5023 %')};
    width: ${wp('36,9230 %')};
    background-color: #D92641;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${hp('0.2369 %')};
`

export const Rate_Text = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20px;
    margin-bottom: ${hp('0.2369 %')};
`

export const ProductPhoto_And_ProductInfo = styled.View `
    margin-left: ${wp('7 %')};
    flex-direction: row;
    margin-top: ${hp('2,1327 %')};
`

export const ProductInfo = styled.View `
    margin-left: ${wp('2,8205 %')};
`

export const ProductTitle = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20px;
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
    font-size: 16px;
    margin-top: ${hp('0.5 %')};
`

export const Number_Of_Units_Asked_And_TotalSpent_Background = styled.View `
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    height: ${hp('4,6208 %')};
`

export const Number_Of_Units_Asked_And_TotalSpent_Container = styled.View `
    flex-direction: row;
    display: flex;
    justify-content: space-between;
`

export const Number_Of_Units_Asked_Text = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 16px;
    margin-left: ${wp('7 %')};
    margin-top: ${hp('1,1848 %')};
`

export const TotalSpent_Text = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 18px;
    margin-right: ${wp('8 %')};
    margin-top: ${hp('0.9478 %')};
`