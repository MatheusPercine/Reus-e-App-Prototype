import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Screen = styled.View `
    flex: auto;
    background-color: #0F151A;
`

export const ProductField = styled.View `
    margin-top: ${hp('5,9241 %')};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    height: ${hp('22,5118 %')};
`

export const ProductPhoto_And_ProductInfo = styled.View `
    margin-left: ${wp('7 %')};
    flex-direction: row;
`

export const ImageProduct = styled.Image `
    margin-top: ${hp('1,7772 %')};
`

export const ProductInfo = styled.View `
    margin-left: ${wp('2,8205 %')};
`
export const ProductTitle = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 20px;
    margin-top: ${hp('1,7772 %')};
    margin-right: ${wp('6,4102 %')};
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

export const RemoveAd_And_EditAd_Field = styled.View `
    margin-left: ${wp('7 %')};
    flex-direction: row;
`

export const RemoveAd_Field = styled.View `
    margin-top: ${hp('2,3696 %')};
`

export const RemoveAd_Button = styled.TouchableOpacity `
    flex-direction: row;
`

export const RemoveAd_Text = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 16px;
    margin-left: ${wp('1.0256 %')};
    margin-right: ${wp('7.1794 %')};
    margin-top: ${hp('0.4 %')};
`

export const EditAd_Button = styled.TouchableOpacity `
    height: ${hp('5,0947 %')};
    width: ${wp('42,5641 %')};
    background-color: #D92641;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const EditAd_Text = styled.Text `
    color: white;
    font-family: Exo2;
    font-size: 18px;
`