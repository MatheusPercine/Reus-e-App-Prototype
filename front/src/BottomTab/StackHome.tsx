import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Results from "../pages/Results";
import { LinearGradient } from "expo-linear-gradient";
import Product from "../pages/Product";

const Stack = createStackNavigator();
export default function StackHome(){
    return(
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
            name="Início"
            component={Home}
            options={{
                headerShown:false
            }}/>
            <Stack.Screen
            name="Resultados"
            component={Results}/>
            <Stack.Screen
            name="Produto"
            component={Product}
            
            />
        </Stack.Navigator>
    )
}