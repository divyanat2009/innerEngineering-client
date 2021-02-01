import React, { Component } from 'react';
import { Route } from 'react-router-dom'
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
import data from './data';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selfcare:data.selfcare,
      gratitude:data.gratitude,
      goals:data.goals,
      quotes:data.quotes,
      mood:data.mood,
      energy:data.energy,
    }
  }
 
addSelfCare=(newSelfCare)=>{
  this.setState(
    {
    selfcare: [...this.state.selfcare, ...newSelfCare]
    },
    ()=>{console.log(`this is the value from addSelfCare length ${this.state.selfcare.length} obj ${this.state.selfcare[this.state.selfcare.length-1].content}`)
  });  
}

addGratitude=(newGratitude)=>{
  console.log(`this is the OG length ${this.state.gratitude.length}`);
  this.setState(
    {
    gratitude: [...this.state.gratitude, ...newGratitude]},()=>{
      console.log(`this is the newG length ${this.state.gratitude.length}`);
    });  
}

addMood=(newMood)=>{
  console.log(this.state.mood.length);
  this.setState(
    {
    mood: [...this.state.mood, newMood]
  },()=>{console.log(this.state.mood.length)
  });
}

addEnergy=(newEnergy)=>{
  console.log(this.state.energy.length)
  this.setState(
    {
    energy: [...this.state.energy, newEnergy]
  },()=>{console.log(this.state.energy.length)
  });
}

updateGoals=(newgoals)=>{
  this.setState({
    goals:newgoals
  },()=>{console.log(this.state.goals)
  });
}


  render(){
    const contextValue = {
      selfcare:this.state.selfcare,
      gratitude:this.state.gratitude,
      goals:this.state.goals,
      quotes:this.state.quotes,
      addSelfCare:this.addSelfCare,
      addGratitude:this.addGratitude,
      addEnergy:this.addEnergy,
      addMood:this.addMood,
      updateGoals:this.updateGoals,
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