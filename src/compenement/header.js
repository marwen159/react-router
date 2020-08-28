import React from 'react'
import logo from '../images/logo.png';
import net from '../images/netflix1.png';
import styled from 'styled-components';
const Styledheader =styled.div
`
background:#1c1c1c;
padding:0 20px;
box-sizing:border-box;

.header-content{
max-width:1280px;
min-height:120px;
pading:20px 0;
margin:0 auto;
box-sizing:border-box;

@media screen and (max-width:500px){
min-height:0px;    
}
}

`;
const Styledlogo=styled.img
`
width:250px;
margin-top:20px;
@media screen and(max-width:500px){
    width:150px;
    margin-top:5px;
}
`;
const Stylednet=styled.img`
width:122px;

float:right;

@media screen and (max-width:500px){
    display:inline-block;
    width:80px;
    margin-to:0px;
}
`


const header = () => {
    return (
        <Styledheader>
        <div className="header-content">
          <Styledlogo src={logo} alt="logo"/>
          <Stylednet  src={net} att="netflix"/>
        </div>
        </Styledheader>
    )
}

export default header
