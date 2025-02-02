import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import React from 'react';
import BottomTab from './src/BottomTab/BottomTab';
import EmailConfirmation from './src/pages/EmailConfirmation';
import { LinearGradient } from 'expo-linear-gradient';
import Onboarding from './src/pages/Onboarding';
import SplashScreen from './src/pages/SplashScreen';


export default function App() {
    const Stack = createStackNavigator();
    const [loaded] = useFonts({ Exo2: require('./assets/fonts/Exo2-VariableFont_wght.ttf') });
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontFamily: 'Exo2'
                    },

                    headerStyle: {
                        backgroundColor: '#D92641',
                    },
                    headerBackground: () => (
                        <LinearGradient colors={['#1C0029', '#D92641']} style={{ height: 70, }}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }} />)
                }}>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Cadastre-se"
                    component={Register}
                    options={{

                    }} />
                <Stack.Screen
                    name="Confirmação de E-mail"
                    component={EmailConfirmation} />
                <Stack.Screen
                    name="BottomTab"
                    component={BottomTab}
                    options={{
                        headerShown: false
                    }} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
