import React from 'react'
import Header from './compenement/header';
import Home from './compenement/home';
import { Route } from 'react-router-dom';
import Movie from './compenement/movie';
import {Link,Router} from 'react-router-dom'
import movielist from './elements/movielist';
const App = () => {
  return (
<>
    <Link to='/'><button>Home</button></Link>
    <Route exact path="/" compenement={movielist} />
   
    <Header />
<Home />

    </>
  )
}

export default App

