import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route } from 'react-router-dom';
import App from '../components/App.js';
import Jokes from '../components/Jokes';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import MusicSearch from './projects/music-search-engine';

ReactDOM.render(
<Router history={createBrowserHistory()}>
    <Switch>
        
        <Route exact path = '/' render={() =><Header Component={App}/>}/>
        <Route path = '/jokes' render={()=> <Header Component={Jokes}/>}/>
        <Route path = '/music-search-engine' render={()=> <Header Component={MusicSearch}/>}/>
    </Switch>
</Router>, 
document.getElementById('root')
);