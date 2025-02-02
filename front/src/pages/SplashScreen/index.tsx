import { LinearGradient } from "expo-linear-gradient";
import { ReuseIcon, SplashContainer } from "./style";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";


export default function SplashScreen() {
    const navigation=useNavigation();
    return (
        
            <LinearGradient
                colors={['#1C0029', '#D92641']}
                style={{ flex: 1, height: '100%' }}
                start={{ x: 0, y: 0.5 }}
                end={{x:1, y:0.5}}>

        <SplashContainer>
            <TouchableOpacity onPress={()=>navigation.navigate('Onboarding')}>
                <ReuseIcon source={require('../../assets/ReuseIcon.png')} />
            </TouchableOpacity>
        </SplashContainer>
            </LinearGradient>
    );
}




