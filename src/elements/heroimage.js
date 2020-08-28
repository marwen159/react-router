import React from 'react'
import styled from'styled-components';
import hero from '../images/fast1.jpg';
import{Link} from 'react-router-dom';
const Imh=styled.img`
background-size:100%;
background-position:center,center;
width:100%;

height:500px;
position:relative;
top:0px;
animation:animateheroimage 1s;
@keyframes animateheroimage{
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
}
`
const Hero =styled.div`
background:#1c1c1c;
border-size:1300px;

.heroimage-content{
    max-width:1280px;
    
    margin:0 auto;

}
.heroimage-text{
    z-index:100;
    max-width:700px;
    position:absolute;
    top:150px;
    margin-right:20px;
    min-height:100px;
    color:#fff;
    h1{
        font-family:'Abel',sans-serif;
        font-size:48px;
        color:#fff;
        @media screen and (max-width:720px){
            font-size:38px;
            color:#fff;
        }
    }
    p{
        font-family:'Abel',sans-serif;
        font-size:22px;
        line-height:26px;
        color:#fff;
        @media screen and (max-width:720px){
            font-size:16px;
            line-height:20px;
            color:#fff;
        }
    }
    @media screen and(max-weidth:720px){
        max-width:100%;
    }
}

}
`;
const heroimage = ({title,text}) => {
    return (
        <Hero>
            <Imh src={hero} />
            <div className="heroimage-content">
             <div className="heroimage-text">  
            <h1>{title}</h1>
            <p>{text}</p>
            </div> 
            </div>
        </Hero>
    )
}

export default heroimage
