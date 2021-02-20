import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import IEContext from '../IEContext';


class Nav extends Component{
    static contextType= IEContext;
    state = {
        isNavHidden:true,
        user_id:""
        
};
componentDidMount() {      
    const user_id=this.props.user_id;
    this.context.setUserId(user_id);    
    this.setState({
      user_id : user_id
    })
  } 

makeNavVisible=()=>{
  this.setState(prevState => 
    ({ isNavHidden: !prevState.isNavHidden })
    );
}

  render(){
    const user_id=this.props.user_id;  
    let List="";
      if (this.props.pageType === 'interior'){
         List = (
            <nav className={`main-nav nav ${this.state.isNavHidden ? "" : "nav-visible"}`}>
                <div className="mobile-menu-icon-container" onClick={this.makeNavVisible}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <h1>Inner Engineering</h1>
                
                <ul>
                    <li><NavLink to={`/dashboard/${user_id}`}>Dashboard</NavLink></li>                    
                    <li><NavLink to={`/daily-form/${user_id}`}>Daily Form</NavLink></li>
                    <li><NavLink to={`/past-care/${user_id}`}>Past Wellbeing</NavLink></li>
                    <li><NavLink to={`/past-gratitude/${user_id}`}>Past Gratitude</NavLink></li>                    
                    <li><NavLink to={`/goal-form/${user_id}`}>Goals</NavLink></li>
                    <li><NavLink to={`/`}>LogOut</NavLink></li>
                </ul>
            </nav>
         );
      }
      if(this.props.pageType === 'home'){
         List = (
                <div className="home-nav-links">
                    <button className="nav-link" onClick={this.props.onSignUpPopUp}>Sign-up</button>
                    <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-in</button>
                </div>
                );
      }
      if(this.props.pageType === 'account'){
        List = (
               <div className="account-nav-links">
                   <h1 className="site-heading">Inner Engineering</h1>
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