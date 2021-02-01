import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component{
    render(){
        return(
            <nav className="main-nav nav">
                <ul>
                  <li><NavLink to={`/`}>Home</NavLink></li>
                  <li><NavLink to={`/dashboard`}>Dashboard</NavLink></li>
                  <li><NavLink to={`/daily-form`}>Daily Form</NavLink></li>
                  <li><NavLink to={`/past-care`}>PastCare</NavLink></li>
                  <li><NavLink to={`/past-gratitude`}>PastGratitude</NavLink></li>                  
                  <li><NavLink to={`/goal-form`}>Goals</NavLink></li>
                </ul>
            </nav>
        );
    }
}   
export default Nav;