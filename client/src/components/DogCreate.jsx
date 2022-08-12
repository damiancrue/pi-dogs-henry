import React, { useEffect, useState } from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {postDog, getTemperaments} from "../actions";
import Card from './Card';
import puppy1 from '../images/lookingatyou.png';
import puppy2 from '../images/waitting.png';

function validateForm(input) {
  let errors = {};
if (!input.name) {
    errors.name = "name is required";
    } else if (input.name.match("^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")==null) {
    errors.name ="only can use letters and spaces for name";
    } 
if (!input.heightMin) {
    errors.heightMin ="minimum height is required";
    } else if (input.heightMin<10){ 
    errors.heightMin ="min height, I've never seen a Dog that shorty";
    } else if (!/^[0-9]+$/.test(input.heightMin)) {
    errors.heightMin ="minimum height must be a number";
    }
if (!input.heightMax) {
    errors.heightMax = "maximum height is required";
    } else if (input.heightMax>200){ 
    errors.heightMax ="max height, I've never seen a Dog that tall";
    } else if (!/^[0-9]+$/.test(input.heightMax)) {
    errors.heightMax ="maximum height must be a number";
    } else if (parseInt(input.heightMax) < parseInt(input.heightMin)) {
    errors.heightMax = "max height must be greater than min height";
    }
if (!input.weightMin) {
    errors.weightMin = "minimum weight is required";
    } else if (input.weightMin<1){ 
    errors.weightMin ="min weight, I've never seen a Dog that small";
    } else if (!/^[0-9]+$/.test(input.weightMin)) {
    errors.weightMin ="minimum weight must be a number";
    }
if (!input.weightMax) {
    errors.weightMax = "maximum weight is required";
    } else if (input.weightMax>100){ 
    errors.weightMax ="max weight, I've never seen a Dog that big";
    } else if(!/^[0-9]+$/.test(input.weightMax)) {
    errors.weightMax ="maximum weight must be a number";
    } else if (parseInt(input.weightMax) < parseInt(input.weightMin)) {
    errors.weightMax = "max weight must be greater than min weight";
}

  return errors;
}

export default function DogCreate() {
    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperaments);
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        life_span: "",
        image: "",
        temperaments: []
})
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validateForm({
            ...input,
            [e.target.name]: e.target.value
        }
            ));
    }
    function handleSelect(e) {
        setInput({
            ...input,
            temperaments: [...input.temperaments,e.target.value]
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        let errors = validateForm(input);
        let listErrors = Object.values(errors);
        console.log(listErrors)
        if(listErrors.length===0){
            console.log(input);
            dispatch(postDog(input));
            alert("Breed created");
            setInput({
                name: "",
                heightMin: "",
                heightMax: "",
                weightMin: "",
                weightMax: "",
                life_span: "",
                image: "",
                temperaments: []
            })
            history.push("/home");
        } else {
            alert(listErrors.join("\n"));
        }
    }
    function handleDelete(e) {
        setInput({
            ...input,
            temperaments: input.temperaments.filter(temperaments => temperaments !== e)
        })}


    useEffect(() => {
        dispatch(getTemperaments());
        },[dispatch]);


    return (
        <div className="formContainer">
            <header>
            <img className="imgbk" src={puppy1} alt="puppy1" />
            <div className="main">
            <Link to="/home"> <button className='button'> Back to home</button></Link> 
            <h1>Create your dog's breed</h1>
            </div>
            <img className="imgbk" src={puppy2} alt="puppy2" />
            </header>
            <div className="createContent">
            <form className='form'onSubmit={(e)=>handleSubmit(e)}>
                <div className="formItem">
                    <label className="label">Breed's Name :</label>
                    {errors.name &&<span className="danger">❌</span>}
                    <input  className="input"
                    type="text"
                    value= {input.name}
                    onChange={e=>handleChange(e)}
                    name="name"
                    placeholder="input breed name"
                    />
                </div>
                <div  className="formItem">
                    <label >Minimun Height:</label>
                    {errors.heightMin &&<span className="danger">❌</span>}
                    <input  className="input"
                    type="text"
                    value={input.heightMin}
                    onChange={e=>handleChange(e)}
                    name="heightMin"
                    placeholder="input minimun height"
                    />
                </div>
                <div className="formItem">
                    <label >Maximun Height:</label>
                    {errors.heightMax &&<span className="danger">❌</span>}
                    <input className="input"
                    type="text"
                    value={input.heightMax}
                    onChange={e=>handleChange(e)}
                    name="heightMax"
                    placeholder="input maximun height"
                    />
                </div>
                <div className="formItem">
                    <label >Minimun Weight:</label>
                    {errors.weightMin &&<span className="danger">❌</span>}
                    <input  className="input"
                    type="text"
                    value={input.weightMin}
                    onChange={e=>handleChange(e)}
                    name="weightMin"
                    placeholder="input minimun weight"
                    />
                </div>
                <div className="formItem">               
                    <label >Maximun Weight:</label>
                    {errors.weightMax &&<span className="danger">❌</span>}
                    <input  className="input"
                    type="text"
                    value={input.weightMax}
                    onChange={(e)=>handleChange(e)}
                    name="weightMax"
                    placeholder="input maximun weight"
                    />
                </div>
                <div className="formItem">
                    <label >Life Span:</label>
                    <input  className="input"
                    type="text"
                    value={input.life_span}
                    onChange={e=>handleChange(e)}
                    name="life_span"
                    placeholder="input life span"
                    />
                </div>
                <div className="formItem">
                    <label >Image's Route:</label>
                    <input  className="input"
                    type="text"
                    value={input.image}
                    onChange={e=>handleChange(e)}
                    name="image"
                    placeholder="input breed image's route"
                     />
                    
                </div>
                <div  className="formItem">
                <label >Select temperaments:</label>
                <select className="input" onChange={e=>handleSelect(e)}>
                <option key={0} value=''>Select</option>
                    {temperaments.sort(function (a, b) {
                                if (a.name < b.name) return -1;
                                if (a.name > b.name) return 1;
                                return 0;
                            }).map((temp) => 
                       (
                           <option value={temp.name}>{temp.name}</option> 
                           )
                           )}
                </select>
                </div>
                           {input.temperaments.map(el=>
                           <div className="temps" onClick={()=>handleDelete(el)}>
                           {el} [x]
                           </div>
                           )}
                <button className="button" type="submit">Create</button>
                            
            </form>
            <div className='form'>
                <div className="card">
                <Card key={input.name} name={input.name} img={input.image} temperaments={input.temperaments} wMin={input.weightMin} wMax={input.weightMax}></Card>
                </div>
            </div>
            </div>
        </div>
    )

}  