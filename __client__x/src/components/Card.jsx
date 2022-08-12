import React from "react";
import '../styles/Card.css'

export default function Card({ image, name, temperaments, weightMin, weightMax }) {
    return (
        <div >
            <img src={image} alt={`${name}`} width='250px' heigth='200px' className='imageDog'/>

            <h2 >{name}</h2>
            <h3 className='info'>{function (temperaments) {
                if (typeof (temperaments) === 'string') {
                    return temperaments;
                }
                if (Array.isArray(temperaments)) {
                    let temps = temperaments.map(el => el.name);
                    return temps.join(', ');
                }
            }(temperaments)}</h3>
            {
                name !== 'Sorry, looks like we don´t have that dog breed' ?
            <h3 className='info'>Weight: {weightMin} - {weightMax} kg</h3> :
                <></>
            }
        </div>
    )
}
