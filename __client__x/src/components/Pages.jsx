import React from 'react';
import '../styles/Pages.css'

export default function Pages({dogsPerPage, allDogs, pages}) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <nav>
            <ul className='pages'>
                {pageNumbers.length > 1 && 
                pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => pages(number)}><strong>{number}</strong></button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}