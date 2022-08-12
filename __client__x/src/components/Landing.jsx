import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';


export default function LandingPage(){
    return(
        <div className='divLP'>
            <Link to='/home'>
                <button className='button'><h1><span>Home </span></h1></button>
            </Link>
        </div>
    )
}