import React from "react";

export default function Pages ({dogsPerPage, allDogs,pages,current}) {
    const pageNumbers = [];
    for (let i=1; i<=Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav >
            <div>Pages</div>
            <div className="pages" >
                {pageNumbers&&
                    pageNumbers.map(number=>(
                        <div className={number===current?"number selected":"number"} key={number} >
                       <a onClick={()=>pages(number)}>-{number}-</a> 
                        </div>
                    ))}
            </div>
        </nav>
    )
}

