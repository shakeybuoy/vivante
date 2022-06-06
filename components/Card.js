import React from 'react'

function Card({ location, distance, cardImage, color }) {
    return (
        <div className="w-3/12 h-96 rounded-2xl shadow-xl" style={{ backgroundColor: color }} >
            <div style={{ background: `url(${cardImage})`, backgroundPosition: 'center', backgroundRepeat: ' no-repeat', backgroundSize: ' cover' }} className="rounded-t-2xl h-4/6" ></div>
            <div className="px-5 text-offWhite mt-5 space-y-2" >
                <h1 className="text-2xl font-semibold">{location}</h1>
                <h3 className="text-md">{distance} kilometers away</h3>
            </div>
        </div>
    )
}

export default Card