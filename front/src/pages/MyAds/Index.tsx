import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from './style';
import ProductField from '../../components/ProductFieldMyAds';

export default function MyAds() {
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

