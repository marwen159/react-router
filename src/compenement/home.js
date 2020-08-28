import React,{useState} from 'react'
import Heroimage from '../elements/heroimage';
import Searchbar from "../elements/searchbar";
import Movielist from '../elements/movielist';
import date from './data';
const Home = () => {
const[Data,setData]=useState(date);
const[title,settitle]=useState("");
    return (
        <div>
            <>
            <Heroimage title="fast and furious"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Searchbar titlefilter={settitle}/>
            <Movielist dt={Data} keyname={title}/>
         
            </>
        </div>
    )
}

export default Home;
