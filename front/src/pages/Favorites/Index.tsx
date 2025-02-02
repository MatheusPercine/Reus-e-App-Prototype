import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Screen } from './style';
import ProductField  from '../../components/ProductFieldFavorites/index';

export default function Favorites() {
    return (
        <Screen>
            <ProductField/>
            <ProductField/>
            <ProductField/>
            <ProductField/>
            <ProductField/>
        </Screen>
    );
}




