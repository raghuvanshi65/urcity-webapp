import axios from 'axios';
import React , {useState , useContext , useReducer , useEffect } from 'react';
import { city , astroIndore} from '../Objects/Defaults';

const GeolocationContext = React.createContext();

function GeolocationContextProvider({children}) {

    const [coordinates , setCoordinates] = useState({
        latitude : 23 ,
        longitude : 33 ,
    });

    const [weather, setWeather] = useState(city);
    const [astro , setAstro] = useState(astroIndore);

    useEffect(() => {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((pos)=>{
                console.log(pos);
                const obj = {
                    latitude : pos.coords.latitude , 
                    longitude : pos.coords.longitude,
                }
                console.log("ye nhi"+JSON.stringify(obj));
                setCoordinates(obj);
                console.log("yahin to chahiye "+JSON.stringify(coordinates));
            });
            
        }
    }, [])

    useEffect(()=>
    {
        (async () =>
        {
            const result = await axios(`https://api.weatherapi.com/v1/forecast.json?key=2f5ed0f02a36426286744817202012&q=${coordinates.latitude},${coordinates.longitude}&days=1`);
            const indore = await axios(`https://api.weatherapi.com/v1/astronomy.json?key=2f5ed0f02a36426286744817202012&q=${coordinates.latitude},${coordinates.longitude}&dt=${weather.location.localtime.split(" ")[0]}`);
        
            setWeather(result.data);
            setAstro(indore.data);
        })();
    }, [coordinates])

    return (
        <GeolocationContext.Provider value={{
            coordinates , weather , astro
        }}>
            {children}
        </GeolocationContext.Provider>
    )
}

export default GeolocationContextProvider
export {GeolocationContext};
