import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Screen = styled.View `
    
    background-color: #0F151A;
`

export const ProductPictures = styled.ScrollView `

`

export const SellerInfo_And_ProductTitle_And_ProductPrice = styled.View `
    height: ${hp('24,5260 %')};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`

export const ProfilePicture_And_Username_And_UserInfo_And_LoveImage_And_ShareImage = styled.View `
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin-top: ${hp('3,7914 %')};
`

export const ProfilePicture_And_Username_And_UserInfo = styled.View `
    flex-direction: row;
    margin-top: ${hp('0.2369 %')};
    margin-left: ${wp('7 %')};
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

export const LoveImage_And_ShareImage = styled.View `
    flex-direction: row;
    margin-right: ${wp('7 %')};
    margin-top: ${hp('0.5369 %')};
`

export const ShareImage = styled.Image `
    margin-left: ${wp('3,3333 %')};
`

export const ProductTitle = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20px;
    margin-top: ${hp('1 %')};
    margin-left: ${wp('7 %')};
`

export const Price = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 24px;
    font-weight: 500;
    margin-top: ${hp('1,777 %')};
    margin-left: ${wp('7 %')};
`

export const Units_Per_Order = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
    margin-top: ${hp('1,1848 %')};
    margin-left: ${wp('7 %')};
`

export const Time_Of_Publication = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
    margin-top: ${hp('1,1848 %')};
    margin-left: ${wp('7 %')};
`




export const DescriptionTitle_And_DescriptionText = styled.View `
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    width:${wp('100%')};
    height: ${hp('14,0995 %')};
`

export const DescriptionTitle = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20px;
    margin-left: ${wp('7 %')};
    margin-top: ${hp('3,1990 %')};
`

export const DescriptionText = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 14px;
    margin-left: ${wp('7 %')};
    margin-top: ${hp('1 %')};
`

export const CommentsField = styled.View `
    margin-top: ${hp('2 %')};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    height: ${hp('65 %')};
`

export const CommentTitle = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20px;
    margin-left: ${wp('7 %')};
    margin-top: ${hp('1.1 %')};
`

export const InsertComment = styled.TextInput `
    color: white;
    font-family: Exo2;
    font-size: 10px;
    font-weight: normal;
    border: white;
    border-radius: 10px;
    height: ${hp('4,1469 %')};
    padding-left: ${wp('7%')};
    margin-top: ${hp('3 %')};
    margin-left: ${wp('7 %')};
    margin-right: ${wp('7 %')};
`

export const SingleComment_Field = styled.View `
    margin-top: ${hp('5,9241 %')};
    padding-left: ${wp('7 %')};
    padding-right: ${wp('7 %')};
    height: ${hp('9,8672 %')};
`

export const ProfilePicture_Username_And_Time_Of_Publication = styled.View `
    flex-direction: row;
    display: flex;
    justify-content: space-between;
`

export const ProfilePicture_And_Username = styled.View `
    flex-direction: row;
`

export const Username_Style2 = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
    margin-top: ${hp('1.2 %')};
    margin-left: ${wp('1,0256 %')};
`

export const Time_Of_Publication_Style2 = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 10px;
    margin-top: ${hp('1.2 %')};
`

export const Comment = styled.Image `
    margin-left: ${wp('9,1538 %')};
`

export const BuyBar = styled.View `
    background-image: linear-gradient(to right, #1C0029, #D92641);
    position: fixed;
    bottom:60;
    height:58;
    width:${wp('100 %')};
`

export const QuantitySelector_And_AddToCartText_And_BuyButton = styled.View `
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    padding-left:${wp('7%')};
    padding-right:${wp('7%')};
`

export const QuantitySelector=styled.View `
    flex-direction:row;
    border: white;
    border-radius: 20px;
    justify-content:space-between;
    padding-left:${wp('2%')};
    padding-right:${wp('2%')};
    align-items:center;
    width:${wp('15.4%')};
    height:20;
    margin-top: ${hp('2 %')};
`

export const PageText=styled.Text `
    color: white;
    font-family: Exo2;
`

export const AddToCart_Text_And_BuyButton = styled.View `
    flex-direction: row;
`

export const AddToCart_Box = styled.Text `
    margin-top: ${hp('1 %')};
`

export const AddToCart_Text = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 14px;
`

export const BuyButton = styled.TouchableOpacity `
    margin-top: ${hp('1.4 %')};
    height: ${hp('4,7393 %')};
    width: ${wp('28,2051 %')};
    background-color: #D92641;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${wp('1,6 %')};
`

export const BuyButton_Text = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 14px;
`
