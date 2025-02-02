import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { AddToCart_Box, AddToCart_Text, AddToCart_Text_And_BuyButton, BuyBar, BuyButton, BuyButton_Text, Comment, CommentsField, CommentTitle, DescriptionText, DescriptionTitle, DescriptionTitle_And_DescriptionText, InsertComment, LoveImage_And_ShareImage, NumberRating, NumberRating_And_StarImage, PageText, Price, ProductPictures, ProductTitle, ProfilePictureImage, ProfilePicture_And_Username, ProfilePicture_And_Username_And_UserInfo, ProfilePicture_And_Username_And_UserInfo_And_LoveImage_And_ShareImage, ProfilePicture_Username_And_Time_Of_Publication, QuantitySelector, QuantitySelector_And_AddToCartText_And_BuyButton, Screen, SellerInfo_And_ProductTitle_And_ProductPrice, ShareImage, SingleComment_Field, StarImage, Time_Of_Publication, Time_Of_Publication_Style2, Units_Per_Order, Username, Username_And_UserInfo, Username_Style2 } from './style';

export default function Product() {

    return (
        <Screen>
            <ProductPictures horizontal={true}>
                <View>
                    <Image source={require('../../assets/Headphone1.png')} style={{ width: 390, height: 270 }} />
                </View>
                <View>
                    <Image source={require('../../assets/Headphone2.png')} style={{ width: 390, height: 270 }} />
                </View>
                <View>
                    <Image source={require('../../assets/Headphone3.png')} style={{ width: 390, height: 270 }} />
                </View>

            </ProductPictures>


            <SellerInfo_And_ProductTitle_And_ProductPrice>

                <ProfilePicture_And_Username_And_UserInfo_And_LoveImage_And_ShareImage>


                    <ProfilePicture_And_Username_And_UserInfo>

                        <TouchableOpacity>
                            <ProfilePictureImage source={require('../../assets/profilepicture6.png')} style={{ width: 35, height: 35 }} />
                        </TouchableOpacity>


                        <Username_And_UserInfo>

                            <TouchableOpacity>
                                <Username>shariganzinho</Username>
                            </TouchableOpacity>

                            <NumberRating_And_StarImage>
                                <NumberRating>4.9</NumberRating>
                                <StarImage source={require('../../assets/star.png')} style={{ width: 10, height: 10 }} />
                            </NumberRating_And_StarImage>


                        </Username_And_UserInfo>

                    </ProfilePicture_And_Username_And_UserInfo>

                    <LoveImage_And_ShareImage>

                        <TouchableOpacity>
                            <Image source={require('../../assets/love.png')} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <ShareImage source={require('../../assets/share.png')} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>

                    </LoveImage_And_ShareImage>

                </ProfilePicture_And_Username_And_UserInfo_And_LoveImage_And_ShareImage>


                <ProductTitle>Headset Redragon Minos c/ caixa</ProductTitle>


                <Price>R$ 90</Price>

                <Units_Per_Order>1 Unidade</Units_Per_Order>

                <Time_Of_Publication>Publicado em 18/04 às 18:45</Time_Of_Publication>

            </SellerInfo_And_ProductTitle_And_ProductPrice>



            <DescriptionTitle_And_DescriptionText>

                <DescriptionTitle>Descrição</DescriptionTitle>
                <DescriptionText>Headset usado em perfeito estado, entrada USB</DescriptionText>
                <DescriptionText>LED vermelho</DescriptionText>

            </DescriptionTitle_And_DescriptionText>



            <CommentsField>

                <CommentTitle>Comentários (3)</CommentTitle>

                <InsertComment placeholder='Inserir Comentário' />

                <SingleComment_Field>

                    <ProfilePicture_Username_And_Time_Of_Publication>

                        <ProfilePicture_And_Username>


                            <TouchableOpacity>
                                <Image source={require('../../assets/profilepicture2.png')} style={{ width: 35, height: 35 }} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Username_Style2>matheuspercinegamerrjytb</Username_Style2>
                            </TouchableOpacity>


                        </ProfilePicture_And_Username>

                        <Time_Of_Publication_Style2>Publicado em 18/04/2022</Time_Of_Publication_Style2>

                    </ProfilePicture_Username_And_Time_Of_Publication>

                    <Comment source={require('../../assets/comment1.png')} style={{ width: 282, height: 50 }} />

                </SingleComment_Field>


                <SingleComment_Field>

                    <ProfilePicture_Username_And_Time_Of_Publication>

                        <ProfilePicture_And_Username>


                            <TouchableOpacity>
                                <Image source={require('../../assets/profilepicture3.png')} style={{ width: 35, height: 35 }} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Username_Style2>rosassol</Username_Style2>
                            </TouchableOpacity>


                        </ProfilePicture_And_Username>

                        <Time_Of_Publication_Style2>Publicado em 19/04/2022</Time_Of_Publication_Style2>

                    </ProfilePicture_Username_And_Time_Of_Publication>

                    <Comment source={require('../../assets/comment2.png')} style={{ width: 283, height: 44 }} />

                </SingleComment_Field>

                <SingleComment_Field>

                    <ProfilePicture_Username_And_Time_Of_Publication>

                        <ProfilePicture_And_Username>


                            <TouchableOpacity>
                                <Image source={require('../../assets/profilepicture4.png')} style={{ width: 35, height: 35 }} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Username_Style2>andresalomaogoias</Username_Style2>
                            </TouchableOpacity>


                        </ProfilePicture_And_Username>

                        <Time_Of_Publication_Style2>Publicado em 19/04/2022</Time_Of_Publication_Style2>

                    </ProfilePicture_Username_And_Time_Of_Publication>

                    <Comment source={require('../../assets/comment3.png')} style={{ width: 168, height: 32 }} />

                </SingleComment_Field>


            </CommentsField>


            <BuyBar>

                <QuantitySelector_And_AddToCartText_And_BuyButton>


                    <QuantitySelector>
                        <TouchableOpacity >
                            <PageText style={{ marginBottom: "70%", marginLeft: "-33%" }}>-</PageText>
                        </TouchableOpacity>
                        <Image source={require('../../assets/line.png')}
                            style={{ height: 20, width: 2, marginRight: "15%" }} />
                        <PageText>1</PageText>
                        <Image source={require('../../assets/line.png')}
                            style={{ height: 20, width: 2, marginLeft: "15%" }} />
                        <TouchableOpacity >
                            <PageText style={{ marginBottom: "25%", marginLeft: "33%" }}>+</PageText>
                        </TouchableOpacity>
                    </QuantitySelector>

                    <AddToCart_Text_And_BuyButton>

                        <AddToCart_Box>

                            <View>
                                <AddToCart_Text>Adicionar ao</AddToCart_Text>
                                <AddToCart_Text>Carrinho</AddToCart_Text>
                            </View>

                        </AddToCart_Box>

                        <BuyButton>
                            <BuyButton_Text>Compre Agora</BuyButton_Text>
                        </BuyButton>

                    </AddToCart_Text_And_BuyButton>


                </QuantitySelector_And_AddToCartText_And_BuyButton>


            </BuyBar>


        </Screen>
    );
}