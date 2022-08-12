import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs,filterByOrigin, orderByName, orderByWeight, getTemperaments, filterByTemperament } from '../actions';
import { Link } from 'react-router-dom';
import Card from './Card';
import Pages from './Pages';
import SearchBar from './SearchBar';
import puppy1 from '../images/all4.png';
import puppy2 from '../images/all3.png';


export default function Home (){

const dispatch = useDispatch();
const allDogs = useSelector(state => state.dogs);
const [render, setRender] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [dogsPerPage] = useState(8);
const indexOfLastDog = currentPage * dogsPerPage; // 8 * 1 = 8
const indexOfFirstDog = indexOfLastDog - dogsPerPage; // 8 - 8 = 0
const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
const temperaments = useSelector(state => state.temperaments);

const pages = (pageNumber=>(
    setCurrentPage(pageNumber)
))

    useEffect(() => {
        dispatch(getDogs())
    },[dispatch])
    useEffect(() => {
        dispatch(getTemperaments())
    } ,[dispatch])
    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }
    function handleFilterOrigin(e){
        e.preventDefault();
        setCurrentPage(1)
        dispatch(filterByOrigin(e.target.value));
    }
    function handleFilterTemperament(e){
        e.preventDefault();
        setCurrentPage(1)
        dispatch(filterByTemperament(e.target.value));
    }
    function handleSortByName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setRender(`Ordenado ${e.target.value}`);
        setCurrentPage(1);
    }
    function handleSortByWeight(e){
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setCurrentPage(1);
        setRender(`Ordenado ${e.target.value}`);
    }

    return(
        <div className='main'>

            <header>
            <img className="imgbk"src={puppy1} alt="puppies" />
            <div className='main'>
            <h1>Dog breed database</h1>
            <p>get information about dog breeds</p>
            </div>
            <img className="imgbk"src={puppy2} alt="puppies" />
            </header>
                
            {/* <Link className='link_to' to='/create'>new Breed</Link> */}
            <div className='back-head'>
            <div className='filters'>
            <button className='button' onClick={e=>{handleClick(e)}}>Reset</button>
            <Link className='link_to' to='/create'><button className='button'>new breed</button></Link>
                <div className='filter-item sel'>
                <div>Sort by breed name</div>
                <select onChange={e => handleSortByName(e)}>
                    <option value='x'> Select</option>
                    <option value='asc'> A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>
                </div>
                <div className='filter-item sel'>
                <div>Sort by weight </div>
                <select onChange={e=> handleSortByWeight(e)}>
                    <option value='x'> Select</option>
                    <option value='asc'> Min-Max</option>
                    <option value='desc'>Max-Min</option>
                </select>
                </div>
                <div className='filter-item sel'>
                <div>Filter by origin</div>
                <select onChange={e => handleFilterOrigin(e)} >
                            <option value='all'>All breeds</option>
                            <option value='api'>Registered breeds</option>
                            <option value='created'>Created breeds</option>
                </select>
                </div>
                <div className='filter-item sel'>
                <div>Filter by temperament</div>
                <select onChange={e => handleFilterTemperament(e)} >
                <option key={0} value='all'>All temperaments</option>
                            {temperaments?.sort(function (a, b) {
                                if (a.name < b.name) return -1;
                                if (a.name > b.name) return 1;
                                return 0;
                            }).map(el => {
                                return (
                                    <option key={el.id} value={el.name}>{el.name}</option>
                                    )
                                })}
                </select>
                </div>
                </div>
                <div className='filter-item sbp'>
                <SearchBar />
                <Pages dogsPerPage={dogsPerPage} allDogs={allDogs.length} pages={pages} current ={currentPage}/>
                </div>
            </div>
            <div className='cards'>
            {currentDogs?.map((dog) => {
                return (
                    <div className='card' key={dog.id} >
                        <Link to= {"/home/"+dog.id}>
                        <Card name={dog.name} img={dog.image} temperaments={dog.temperaments} wMin={dog.weightMin} wMax={dog.weightMax} created={dog.createdInDb}/>
                        </Link>
                    </div>
                   );
                })}
                </div>
            </div>
)}