import React from 'react';
import {Header} from "./Components";
import {MainPageContainer,MusicListContainer,SearchContainer} from "./Components/Pages";
import './Styles/index.scss'
import {Route, Switch} from "react-router-dom";

let App = ()=> {
  return (
    <div className="app">
        <Header/>
        <Switch>
            <Route exact path='/' component = {()=> <MainPageContainer/>}/>
            <Route exact path='/search' component = {()=> <SearchContainer/>}/>
            <Route exact path='/music/:name' component = {()=> <MusicListContainer/>}/>
            <Route component={()=> <div className='body__notFound'>404 The page not found</div>} />
        </Switch>
    </div>
  );
}

export default App;
