import { SearchView, SearchInput, SearchIcon } from "./style"
import { AntDesign } from '@expo/vector-icons';

export default function RstsSearchBar() {
    return (

        <SearchView>
            <SearchInput placeholder="Pesquisar" />
            <SearchIcon>
                <AntDesign name="search1" size={24} color="white" />
            </SearchIcon>
        </SearchView>
    )
};