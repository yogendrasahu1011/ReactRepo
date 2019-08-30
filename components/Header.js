import React from 'react';
import { Link } from 'react-router-dom';
const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
}
const Header = props => {
    const { Component } = props;
    return (
        <div>
            <div>
                <h3 style={style}><Link to='/'>Home</Link></h3>
                <h3 style={style}><Link to='/jokes'>Jokes</Link></h3>
                <h3 style={style}><Link to='/music-search-engine'>Music Search</Link></h3>

            </div>
            <Component />
        </div>
    )
}
export default Header;