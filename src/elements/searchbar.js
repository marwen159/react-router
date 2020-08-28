import React from 'react';
import styled from'styled-components';
const Search=styled.div`
background:#1c1c1c;


`

const searchbar = ({titlefilter}) => {
    return (
        <Search >
            <input className="search-box"
            placeholder="search for a movie"
            onChange={(e)=>{titlefilter(e.target.value)}}/>
        </Search>
    )
}

export default searchbar;
