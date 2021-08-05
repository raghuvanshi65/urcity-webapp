import React from 'react'
import Astro from './Astro'
import Precipitation from './Precipitation';
import '../Style/Pha.css';

function Pha() {
    return (
        <div className="Pha">
            <Precipitation></Precipitation>
            <Astro></Astro>
        </div>
    )
}

export default Pha
