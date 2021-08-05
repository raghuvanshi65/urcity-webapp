import React , {useState , useEffect , useContext} from 'react'; 
import GeolocationContextProvider  , {GeolocationContext}from '../Contexts/GeolocationContextProvider';
import '../Style/MajorTemp.css';

function MajorTemp() {
    const { coordinates , weather } = useContext(GeolocationContext);

    return (
        <div className="MajorTemp">
            <h2>{weather.location.name}</h2>
            <p>{weather.location.region} - {weather.location.country} (timezone - {weather.location.tz_id})</p>
            <p>localtime - {weather.location.localtime} (reload)</p>
            <div className="wantGrid">
            <div id="temp"><span className="display-3">{weather.current.feelslike_c}</span><span className="display-4">*C</span></div>
            <div id="info">
            <p>Weather - {weather.current.condition.text}</p>
            <p>Wind - {weather.current.wind_kph} kmph</p>
            <p>Wind direction - {weather.current.wind_dir}</p>
            <p>Humidity - {weather.current.humidity}</p>
            <p>Precipitation - {weather.current.precip_mm} mm</p>
            </div>
            </div>
        </div>
    )
}

export default MajorTemp
