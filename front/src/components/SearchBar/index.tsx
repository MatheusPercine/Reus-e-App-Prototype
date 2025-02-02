import { SearchView, SearchInput, SearchIcon } from "./style"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function SearchBar() {
    const navigation = useNavigation();
    return (

        <SearchView>
            <SearchInput placeholder="Pesquisar" />
            <SearchIcon onPress={()=>navigation.navigate('Resultados')}>
                <AntDesign name="search1" size={24} color="white" />
            </SearchIcon>
        </SearchView>
    )
};