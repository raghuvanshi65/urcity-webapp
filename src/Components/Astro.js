import React , {useContext} from 'react';
import '../Style/Astro.css';
import sunrise from '../Icons/sunrise.svg';
import sunset from '../Icons/sunset.svg';
import moon from '../Icons/moon.svg';
import circle from '../Icons/circle.svg';
import zap from '../Icons/zap.svg';
import { GeolocationContext } from '../Contexts/GeolocationContextProvider';

function Astro() {
    const {coordinates , weather , astro} =  useContext(GeolocationContext);

    return (
        <div className="Astro">
            <h3>Astronomy</h3>
            <div className="details">
                <blockquote className="blocks">
                <img src={sunrise} alt=""/>
                <p>sunrise - {astro.astronomy.astro.sunrise}</p>
                </blockquote>
                <blockquote className="blocks">
                <img src={sunset} alt=""/>
                <p>sunset - {astro.astronomy.astro.sunset}</p>
                </blockquote>
                <blockquote className="blocks">
                <img src={moon} alt=""/>
                <p>moonrise - {astro.astronomy.astro.moonrise}</p>
                </blockquote>
                <blockquote className="blocks">
                <img src={moon} alt=""/>
                <p>moonset - {astro.astronomy.astro.moonset}</p>
                </blockquote>
                <blockquote className="blocks">
                <img src={circle} alt=""/>
                <p>moonphase - {astro.astronomy.astro.moon_phase}</p>
                </blockquote>
                <blockquote className="blocks">
                <img src={zap} alt=""/>
                <p>moon illumination - {astro.astronomy.astro.moon_illumination}</p>
                </blockquote>
            </div>
        </div>
    )
}

export default Astro
