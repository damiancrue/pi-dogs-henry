import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import waitting from "../images/waitting.png";
import ouch from "../images/ouch.png";


export default function Detail(props) {
    console.log(props);

    const dispatch = useDispatch();

    var id = props.match.params.id; // Para acceder al id del Detail

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    var dog = useSelector ((state=> state.detail))
    console.log(dog[0]);


    return (
    <div>{ 
            dog.length > 0 ?
            <div className='detail'>
            <h1 className="landing">{dog[0].name.toUpperCase()}</h1>
            <div className="detailContent">
            <div className="leftDet">
            <img  className='imgDetail' src={dog[0].image || ouch } alt='No Pic in database'/>
            </div>
            <div  className="rightDet">
            <h5 className="info">Height: {dog[0].heightMin} Cms- {dog[0].heightMax} Cms</h5>
            <h5 className="info">Weight: {dog[0].weightMin} Kgs- {dog[0].weightMax} Kgs</h5>
            <h5 className="info">Life span: {dog[0].life_span}</h5>
            <div>
            <h5 className="info">Temperament: {dog[0].createdInDb?dog[0].temperaments.map(temperament=> <p> - {temperament.name}</p>) :dog[0].temperaments.map(temperament=> <p> - {temperament}</p>)}
            </h5>
            </div>
            <Link to="/home" > <button onClick={id="zz"} className='button'> back to home</button></Link> 
            </div>
            </div>
            </div>:
            <div>
                <h3>Loading...</h3>
                <p>if this take more than 5 seconds, please return to home</p>
                <img src={waitting} alt="waitting" />
                <Link to="/home"> <button className='button'> back to home</button></Link> 
            </div>
    }
    </div>
    )   
}