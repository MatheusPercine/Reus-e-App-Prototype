import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PurchaseInfoComponent from '../../components/PurchaseInfoComponent/index';
import PurchaseInfo from '../../components/PurchaseInfoComponent/index';
import { Screen } from './style';

export default function PurchaseHistory() {
    return (
        <Screen>
            <PurchaseInfoComponent />
            <PurchaseInfoComponent />
            <PurchaseInfoComponent />
            <PurchaseInfoComponent />
            <PurchaseInfoComponent />
        </Screen>
    );
}