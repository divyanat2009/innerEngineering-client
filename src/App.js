import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home.js';
import Dashboard from './Dashboard/Dashboard.js';
import DailyForm from './DailyForm/DailyForm.js';
import PastCare from './PastCare/PastCare.js';
import PastGratitude from './PastGratitude/PastGratitude.js';
import GoalForm from './GoalForm/GoalForm.js';
import Footer from './Footer/Footer.js';
import IEContext from './IEContext.js';
import data from './data.js';
import config from './config.js';
import { FormatDate } from './Functions/FormatDate';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selfcares:data.selfcare,
      gratitudes:data.gratitude,
      goals:data.goals,
      quotes:data.quotes,
      moods:data.moods,
      error:null,
      current_gratitude_results_page:1,
      current_selfcares_results_page:1,
      current_display:{
        gratitudes:{page:1, date_to:'all', date_from:''},
        selfcares :{page:1, date_to:'all', date_from:'', type:'all',rating:'all'}        
      }
    };//end of state 
  }

//Updating the current page of results being displayed on the different pages
updateCurrentPage=(typeOfPage, direction)=>{
  let newPage = this.state.current_display[typeOfPage].page;
  if(direction === 'forward')
  {
    newPage = this.state.current_display[typeOfPage].page + 1;
  }
  else if(direction === 'back')
  {
    newPage = this.state.current_display[typeOfPage].page - 1;
  }
  else if(direction === 'reset')
  {newPage = 1;}

  const {current_display} = this.state;
  current_display[typeOfPage].page = newPage;
  this.setState(
    {current_display:current_display}
  );
};

updateTypeSelected=(typeOfPage,selectedType)=>{
  const {current_display} = this.state;
  current_display[typeOfPage].type = selectedType;
  this.setState(
    {current_display:current_display}
  );
}

updateDateSelected=(typeOfPage, date)=>{
  const {current_display} = this.state;
  current_display[typeOfPage].date_to = date;
  this.setState(
    {current_display:current_display}
  );
}

updateRatingSelected=(typeOfPage, ratingSelected)=>{
  const {current_display} = this.state;
  current_display[typeOfPage].rating = ratingSelected;
  this.setState(
    {current_display:current_display}
  );
}
 
addSelfCare=(newSelfCare)=>{
  this.setState({
    selfcares: [...this.state.selfcares, ...newSelfCare]
    });  
};

addGratitude=(newGratitude)=>{
  console.log(`this is the OG length ${this.state.gratitudes.length}`)
  this.setState({
    gratitudes: [...this.state.gratitudes, ...newGratitude]
  });
};

addMoods=(newMoods)=>{
  this.setState({
    moods:[...this.state.moods, ...newMoods]
  });
}

updateGoals=(newgoals)=>{
  this.setState({
    goals:newgoals
  });
}

componentDidMount(){
  this.setState(
    { error : null }
  );
  //getting gratitudes
  fetch(`${config.API_ENDPOINT}api/gratitudes`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again later');
    }
    return res.json();
  })
  .then(data=>{
    let formatedDateData = data.map(obj=>FormatDate(obj));
    this.setState({
      gratitude_most_recent:formatedDateData,
    });
    this.setState({
      gratitudes:formatedDateData,
    });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })
  fetch(`${config.API_ENDPOINT}api/selfcares`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again later');
    }
    return res.json();
  })
  .then(data=>{    
   let formatedDateData = data.map(obj=>FormatDate(obj));
    this.setState({
      selfcares:formatedDateData,
    });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })  
  fetch(`${config.API_ENDPOINT}api/quotes`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again later');
    }
    return res.json();
  })
  .then(data=>{
    this.setState({
      quotes:data,
     });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })
  fetch(`${config.API_ENDPOINT}api/goals`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again later');
    }
    return res.json();
  })
  .then(data=>{
    let lastEntry = data.length
    this.setState({
      goals:data[lastEntry-1],
     });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })//end of fetch for goals

  fetch(`${config.API_ENDPOINT}api/moods`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again later');
    }
    return res.json();
  })
  .then(data=>{
    let formatedDateData = data.map(obj=>FormatDate(obj));
    this.setState({
      moods:formatedDateData,
    });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })
}//end of cDM


  render(){
    const contextValue = {
      selfcares:this.state.selfcares,
      gratitudes:this.state.gratitudes,
      goals:this.state.goals,
      moods:this.state.moods,
      inspiration:this.state.inspiration,
      quotes:this.state.quotes,
      addSelfCare:this.addSelfCare,
      addGratitude:this.addGratitude,
      addMoods:this.addMoods,
      updateGoals:this.updateGoals,
      updateCurrentPage:this.updateCurrentPage,
      updateDateSelected:this.updateDateSelected,
      updateRatingSelected:this.updateRatingSelected,
      current_display:this.state.current_display,
      updateTypeSelected:this.updateTypeSelected,
      updateNumberofTotalResults:this.updateNumberofTotalResults,
    }
    return(
      <div className="App">
        <IEContext.Provider value={contextValue}>
       
        <Route exact path='/' component={Home}/> 
        <Route exact path='/dashboard' component={Dashboard} /> 
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