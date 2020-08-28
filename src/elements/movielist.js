import React from 'react'
import {Link,Route} from 'react-router-dom';
import Moviecard from './moviecard'
import Movie from '../compenement/movie';
import './m.css';
const movielist = ({dt,keyname}) => {
    
    return (
       
        <div style={{display:'flex',flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}}>
            {dt.filter(obj => 
            obj.title.toLowerCase().includes(keyname.toLowerCase().trim()))
            .map((el,i)=>
           <>
           <Link to={`/${el.title}`} style={{textDecoration:"none"}}> 
           <Moviecard key={i} movies={el} />
           </Link>
<Route path={`/${el.title}`} render={()=>
<div className="container">
    <h1 >{el.de}</h1>
<a href={el.trailer} target="_blank" style={{textDecoration:"none" ,color:"white",textAlign:"center"}}>trailer </a>
</div>}>
</Route>
           </>
            )}
        </div>
    )
}

export default movielist;
