import React from 'react'
import MajorTemp from './MajorTemp'
import MinorTemp from './MinorTemp';
import '../Style/Temperture.css';

function Temperature() {
    return (
        <div className="Temperature">
            <MajorTemp></MajorTemp>
            <MinorTemp></MinorTemp>
        </div>
    )
}

export default Temperature
