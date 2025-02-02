import { createStackNavigator } from "@react-navigation/stack"
import Favorites from "../pages/Favorites/Index";
import MyAds from "../pages/MyAds/Index";
import Profile from "../pages/Profile";
import { LinearGradient } from "expo-linear-gradient";
import PurchaseHistory from "../pages/PurchaseHistory/Index";
import Product from "../pages/Product";
import RateUser from "../pages/RateUser/Index";


const Stack = createStackNavigator();
export default function StackProfile() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontFamily: 'Exo2'
                },
                headerStyle: {
                    // backgroundColor: '#D92641',
                },
                headerBackground: () => (
                    <LinearGradient colors={['#1C0029', '#D92641']} style={{ height: 70 }}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }} />)
            }}>
            <Stack.Screen
                name="Perfil"
                component={Profile}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="Favoritos"
                component={Favorites} />
            <Stack.Screen
                name="Meus anúncios"
                component={MyAds} />
            <Stack.Screen
                name="Histórico de compras"
                component={PurchaseHistory}/>
                <Stack.Screen
                name="Avaliar"
                component={RateUser}/>

        </Stack.Navigator>
    )
}
