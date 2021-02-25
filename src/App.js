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
//import { FormatDate } from './Functions/FormatDate';
import UserSignUp from './UserSignUp/UserSignUp';
import UserSignIn from './UserSignIn/UserSignIn';
import TokenService from './services/token-service';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      users:data.users,      
      user_id:"",
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
  console.log(current_display);
}

updateDateSelected=(typeOfPage, date)=>{
  const {current_display} = this.state;
  current_display[typeOfPage].date_to = date;
  this.setState(
    {current_display:current_display}
  );
  console.log(current_display)
}

updateRatingSelected=(typeOfPage, ratingSelected)=>{
  const {current_display} = this.state;
  current_display[typeOfPage].rating = ratingSelected;
  this.setState(
    {current_display:current_display}
  );
  console.log(current_display)
}
 
addSelfCare=(newSelfCare)=>{
  this.setState({
    selfcares: newSelfCare
    });  
    console.log(newSelfCare)
};

addGratitude=(newGratitude)=>{  
  this.setState({
    gratitudes: newGratitude
  });
  console.log(newGratitude);
};

addMoods=(newMoods)=>{
  this.setState({
    moods:newMoods
  });
  console.log(newMoods)
}

updateGoals=(newgoals)=>{
  this.setState({
    goals:newgoals
  });
  console.log(newgoals)
}
setUserId=(id)=>{  
  this.setState({
    user_id:id
  })
  console.log("INSIDE SETUSERID", id)
}


componentDidMount(){      
  this.setState({
    error:null,    
  });

  //getting users
  fetch(`${config.API_ENDPOINT}api/users`,{
      method:'GET',
      header:{
        'content-type':'application/json',       
        'Authorization': `Bearer ${config.API_KEY}`
      },
    })
    .then(res=>{
      if(!res.ok){
        throw new Error('Something went wrong, please try again')
      }
      return res.json();
    })
    .then(userdata=>{   
      this.setState({
        users:userdata
      });
    })
    .catch(err=>{
      this.setState({
        error:err.message
      });
    });  
   
    fetch(`${config.API_ENDPOINT}api/users/${this.state.user_id}`,{
      method:'GET',
      header:{
        'content-type':'application/json',       
        'Authorization': `Bearer ${config.API_KEY}`
      },
    })
    .then(res=>{
      if(!res.ok){
        throw new Error('Something went wrong, please try again')
      }
      return res.json();
    })
    .then(userdata=>{   
      this.setState({
        users:userdata
      });
    })
    .catch(err=>{
      this.setState({
        error:err.message
      });
    });  
  //getting gratitudes
  console.log(TokenService.getAuthToken());
  console.log(this.state.user_id);
  
  
}//end of cDM


  render(){
    const contextValue = {
      selfcares:this.state.selfcares,
      gratitudes:this.state.gratitudes,
      goals:this.state.goals,
      users:this.users,
      setUserId:this.setUserId,
      moods:this.state.moods,
      quotes:this.state.quotes,
      addUser:this.addUser,
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
        <Route exact path='/dashboard/:id' component={Dashboard} /> 
        <Route exact path='/daily-form/:id' component={DailyForm}/> 
        <Route exact path='/past-care/:id' component={PastCare}/> 
        <Route exact path='/past-gratitude/:id' component={PastGratitude}/> 
        <Route exact path='/goal-form/:id' component={GoalForm}/> 
        <Route exact path='/user-signup' component={UserSignUp}/>
        <Route exact path='/user-signin' component={UserSignIn}/>         
        
        <Footer/>
        </IEContext.Provider>              
      </div>
    );
  }
}

export default App;