import React from "react";
import { Link } from "react-router-dom";
import patita from "../images/patit.png";

export default function LandingPage() {
    return(

        <div>
            <h1 className="landing">
            WELCOME TO DOG BREED APP
            </h1>
            <Link to="/home">
            <button className="button">Enter</button>    
            </Link>
            <img className="animation" src={patita} alt="" />
        </div>
    )}