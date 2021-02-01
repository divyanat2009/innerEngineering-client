import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home.js';
import Dashboard from './Dashboard/Dashboard.js';
import DailyForm from './DailyForm/DailyForm.js';
import PastCare from './PastCare/PastCare.js';
import PastGratitude from './PastGratitude/PastGratitude.js';
import GoalForm from './GoalForm/GoalForm.js';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';
import IEContext from './IEContext.js';


class App extends Component{
  static defaultProps ={
    data:{
      selfcare:[],
      gratitude:[],
      goals:{},      
      quotes:[]
    }
  };

  render(){
    const contextValue = {
      selfcare:this.props.data.selfcare,
      gratitude:this.props.data.gratitude,
      goals:this.props.data.goals,
      quotes:this.props.data.quotes,
      }
    return(
      <div className="App">
        <IEContext.Provider value={contextValue}>
        <Nav/>
        <Route exact path='/' component={Home}/> 
        <Route exact path='/dashboard' component={Dashboard}/> 
        <Route exact path='/daily-form' component={DailyForm}/> 
        <Route exact path='/past-care' component={PastCare}/> 
        <Route exact path='/past-gratitude' component={PastGratitude}/> 
        <Route exact path='/goal-form' component={GoalForm}/> 
        
        <Footer/>
        </IEContext.Provider>       
      </div>
    );
  }
}

export default App;