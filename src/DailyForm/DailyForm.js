import React, { Component } from 'react';
import TokenService from '../services/token-service';
import '../_styles/Form.css';
import IEContext from '../IEContext.js';
import config from '../config.js';
import { FormatDate } from '../Functions/FormatDate';
import ButtonRow from '../ButtonRow/ButtonRow';
import Nav from '../Nav/Nav.js';

class DailyForm extends Component{

  static contextType = IEContext;

  constructor(props){
    super(props);    
    this.state={
        date:{
            value:"1",
            touched:false
        },
        gratitude1:{
            value:"",
            touched:false
        },     
        activity1:{
            value:"",
            touched:false
        },     
        type1:{
            value:"",
            touched:false
        },       
        rating1:{
            value:"",
            touched:false
        },      
        mood:{
            value:"",
            touched:false
        },
        energy:{
            value:"",
            touched:false
        },
        error:null,
        user_id: this.props.match.params.id     
        
    };
}
componentDidMount() {
  const user_id = this.props.match.params.id;  
  this.context.setUserId(user_id);  
  this.setState({
    user_id : user_id    
  });
}
//Updating
updateGratitude=(gratitude, inputId)=>{
if(inputId==='gratitude1')
  {
    this.setState({
      gratitude1:{value: gratitude, touched: true}
    });    
  };
}
updateActivities=(activity, inputId)=>{
    if(inputId==='activity1')
      {
        this.setState({
          activity1:{value: activity, touched: true}
      }
    )};    
}
updateActivityType=(type, inputId)=>{
    if(inputId==='type1')
      {
        this.setState({
          type1:{value: type, touched: true}
        }
    )};
}
updateActivityRating=(rating, inputId)=>{
    if(inputId==='rating1')
      {
        this.setState({
          rating1:{value: rating, touched: true}
        });
      };
}
updateMood=(moodLevel)=>{
    this.setState({
      mood:{value: moodLevel, touched: true}
    });
}
updateEnergy=(energyLevel)=>{
    this.setState({
      energy:{value: energyLevel, touched: true}
    });
}

handleSubmit = e =>{
  e.preventDefault();
  const {user_id, gratitude1, activity1, type1, rating1, mood, energy } = this.state;      
  //add gratitude
  let newGratitude={};
  if(gratitude1.value){
      newGratitude = {
      user_id:user_id,
      content:gratitude1.value,
      };      
  }
    //add energy and mood  
  if(newGratitude.length !== 0){   
  fetch(`${config.API_ENDPOINT}api/gratitudes/`+user_id,{
    method: 'POST',
    body: JSON.stringify(newGratitude),
    headers: {
     'content-type': 'application/json',
     'Authorization': `Bearer ${TokenService.getAuthToken()}`,
    },
  })
    .then(res => {      
       if (!res.ok) {
       // get the error message from the response,
         return res.json().then(error => {
            // then throw it
            throw error;
          });
        }
        return res.json();
      })
      .then(data => {        
        let formatedDateData = data.map(obj=>FormatDate(obj));
        this.context.addGratitude(formatedDateData);
      })
      .catch(error => {
        this.setState({ error })
      });
    }//end of newGratitude

  //add selfcare        
  let newSelfCare={};
  if(activity1.value){
    newSelfCare = {        
        user_id:user_id,
        content:activity1.value,
        type:type1.value,
        rating:rating1.value,
      };      
  } 
  if(newSelfCare.length !== 0){    
    fetch(`${config.API_ENDPOINT}api/selfcares/`+user_id,{
      method: 'POST',
      body: JSON.stringify(newSelfCare),
      headers: {
       'content-type': 'application/json',
       'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error;
          });
        }
        return res.json();
      })
      .then(data => {        
         let formatedDateData = data.map(obj=>FormatDate(obj));
         this.context.addSelfCare(formatedDateData);
      })
      .catch(error => {
        this.setState({ error });
      });
    }//end if newSelfcare
    let newMoods={};
    if(energy.value && mood.value){
         newMoods = {
         user_id:parseInt(user_id), 
         energy_level:parseInt(energy.value),
         mood_level:parseInt(mood.value),
        };          
    }
    if(newMoods){    
      setTimeout(2000, ()=>{  
       fetch(`${config.API_ENDPOINT}api/moods/`+user_id,{
          method: 'POST',
          body: JSON.stringify(newMoods),
           headers: {
           'content-type': 'application/json',
           'Authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
      })
        .then(res => {
          if (!res.ok) {
            // get the error message from the response,
            return res.json().then(error => {
              // then throw it
              throw error;
            });
          }
          return res.json();
        })
        .then(data => {            
            let moodArray = [{data}];
            let formatedDateData = moodArray.map(obj=>FormatDate(obj));
            this.context.addMoods(formatedDateData);
        })
        .catch(error => {
          this.setState({ error });
        });
       })
      }//end if newMood
      
    this.props.history.push(`/dashboard/${this.state.user_id}`);
}//end of handleSubmit

handleClickCancel = () => {
    this.props.history.push(`/dashboard/${this.state.user_id}`);
};

    render(){       
        
        return(
            <section className="dailyform">
                <header>
                    <Nav pageType={'interior'} user_id={this.state.user_id}/>
                    <h2>Today's Selfcare and Gratitude</h2>
                </header>
                <form className="daily-form" onSubmit={e=>this.handleSubmit(e)}>
                  
                    <fieldset className="gratitude-entries">
                        <legend>I am grateful for...</legend>
                        <input placeholder="a morning walk" type="text" name="gratitude1"   id="gratitude1"
                        onChange={e => this.updateGratitude(e.target.value, e.target.id)}/>           
                    </fieldset>
                   
                    <div className="activity-input-area">
                        <fieldset>
                        <legend>Today I...</legend>
                            <div className="activity-input">
                                <div className="content-input">
                                    <label>Activity</label>
                                    <input placeholder="went for a run" type="text" name="activity1" id="activity1"
                                    onChange={e => this.updateActivities(e.target.value, e.target.id)}/>
                                </div>
                                <label htmlFor="type1">Type of Selfcare</label>
                                <select id="type1"
                                onChange={e => this.updateActivityType(e.target.value, e.target.id)}>
                                    <option value="">Select</option>
                                    <option value="emotional">Emotional</option>
                                    <option value="physical">Physical</option>
                                    <option value="energy">Energy</option>
                                    <option value="spiritual">Spiritual</option>
                                </select>
                                <label htmlFor="rating1">Rating</label>
                                <select id="rating1"
                                onChange={e => this.updateActivityRating(e.target.value, e.target.id)}>
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select> 
                            </div>    
                        </fieldset>                    
                    </div>  
              
                    <fieldset className="mood-input">
                      <legend>How do I feel today?</legend>
                      <div>
                        <label htmlFor="mood">My Mood</label>
                        <select id="mood"
                        onChange={e => this.updateMood(e.target.value)}>
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>   
                      </div>
                      <div>   
                        <label htmlFor="energy">My Energy-level</label>
                        <select id="energy"
                        onChange={e => this.updateEnergy(e.target.value)}>
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>   
                    </div>    
                </fieldset>                
             <div className="button-row">    
                <button type="submit"
                  disabled={
                          (!this.state.activity1.touched && !this.state.gratitude1.touched) 
                          }
                >
                 Submit</button>
                <button type="reset" onClick={this.handleClickCancel}>Cancel</button>
             </div>
            </form>
            <ButtonRow
                links ={[{[`/dashboard/${this.state.user_id}`]:'Your Dashboard'},
                         {[`/past-care/${this.state.user_id}`]:'Your Past Selfcare'},
                         {[`/past-gratitude/${this.state.user_id}`]:'Your Past Gratitudes'},
                         {[`/goal-form/${this.state.user_id}`]:'Set Your Goals'}]}
            />    
        </section>
      );
    }
}
export default DailyForm;