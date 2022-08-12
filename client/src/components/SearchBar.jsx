import React from "react";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { getNameDogs } from "../actions";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("");

function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
}

function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameDogs(name));
    setName("");
}
    return (
        <div className="filter-item sel">
            <input className="input"
            type="text"
            value={name}
            placeholder="Search"
            onChange={(e)=>handleInputChange(e)}/>
            <button className="button"
            type='submit' 
            onClick={
                (e)=>(handleSubmit(e))
                               }>Search</button>
        </div>
    )
}