import React , { useContext , useState , useEffect , useReducer } from "react";
import axios from 'axios';

const SearchContext = React.createContext();

function SearchContextProvider({children}) {

    const [searchedCity, setSearchedCity] = useState({});

    useEffect(async () => {
        let result = axios ('https://api.weatherapi.com/v1/forecast.json?key=2f5ed0f02a36426286744817202012&q=New delhi&days=1');
        setSearchedCity(result.data);
    }, []);

    return (
        <SearchContext.Provider value={{
            currentCity : searchedCity
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider
