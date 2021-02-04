import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


class Nav extends Component{
    state = {
        isNavHidden:true,
};

makeNavVisible=()=>{
  this.setState(prevState => 
    ({ isNavHidden: !prevState.isNavHidden })
    );
}

  render(){
    let List="";
      if (this.props.pageType === 'interior'){
         List = (
            <nav className={`main-nav nav ${this.state.isNavHidden ? "" : "nav-visible"}`}>
                <div className="mobile-menu-icon-container" onClick={this.makeNavVisible}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <h1><Link className="site-heading" to={'/dashboard'}>Inner Engineering</Link></h1>
                
                <ul>
                    <li><NavLink to={`/dashboard`}>Dashboard</NavLink></li>                    
                    <li><NavLink to={`/daily-form`}>Daily Form</NavLink></li>
                    <li><NavLink to={`/past-care`}>PastWellbeing</NavLink></li>
                    <li><NavLink to={`/past-gratitude`}>PastGratitude</NavLink></li>                    
                    <li><NavLink to={`/goal-form`}>Goals</NavLink></li>
                </ul>
            </nav>
         );
      }
      if(this.props.pageType === 'home'){
         List = (
                <div className="home-nav-links">
                    <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-up</button>
                    <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-in</button>
                </div>
                );
            }

        return(
            <div>
                {List}
            </div>
        );
    }
}   
export default Nav;