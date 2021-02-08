import React, { Component } from 'react';
import '../_styles/Form.css';
import IEContext from '../IEContext.js'
import config from '../config.js'
import { FormatDate } from '../Functions/FormatDate'
import ButtonRow from '../ButtonRow/ButtonRow'
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
        gratitude:{
            value:"",
            touched:false
        },
      
        activity:{
            value:"",
            touched:false
        },       
        type:{
            value:"",
            touched:false
        },
       rating:{
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
    };
}

updateGratitude=(gratitude, inputId)=>{
  if(inputId==='gratitude')
    {
      this.setState({
        gratitude:{value: gratitude, touched: true}
      });
    };  
}
updateActivities=(activity, inputId)=>{
    if(inputId==='activity')
      {
        this.setState({
          activity:{value: activity, touched: true}
        });
      };     
}
updateActivityType=(type, inputId)=>{
    if(inputId==='type')
      {
        this.setState({
          type:{value: type, touched: true}
        });
      };    
}
updateActivityRating=(rating, inputId)=>{
    if(inputId==='rating')
      {
        this.setState({
          rating:{value: rating, touched: true}
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
    const { gratitude, activity, type, rating, mood, energy } = this.state;
    //for now all entries will get same user_id, id, and date  
    const newuser_id = "2";
    //this will be based on the date input    
    //add selfcare
    let newSelfCare=[];
    if(activity.value){
      newSelfCare = [{      
      user_id:newuser_id,
      content:activity.value,
      type:type.value,
      rating:rating.value,      
      }];
    //console.log(`nsc from form ${newSelfCare[0].content}`)    
    };
    //add gratitude
    let newGratitude=[]
    if(gratitude.value){
        newGratitude = [{
        user_id:newuser_id,
        content:gratitude.value,
        }];      
    };
    //add energy and mood
    let newMoods={}
    if(energy.value && mood.value){
      newMoods = {
        energy_level:energy.value,
        mood_level:mood.value,         
      };     
    }
    console.log(newGratitude)
  if(newGratitude.length !== 0){
    fetch(`${config.API_ENDPOINT}api/gratitudes`,{
        method: 'POST',
        body: JSON.stringify(newGratitude),
         headers: {
         'content-type': 'application/json',
         'Authorization': `Bearer ${config.API_KEY}`
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
        this.setState({ error });
      });
    }//end of newGratitude

    if(newSelfCare.length !== 0){
      fetch(`${config.API_ENDPOINT}api/selfcares`,{
        method: 'POST',
        body: JSON.stringify(newSelfCare),
         headers: {
         'content-type': 'application/json',
         'Authorization': `Bearer ${config.API_KEY}`
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
        return res.json()
      })
      .then(data => {
          let formatedDateData = data.map(obj=>FormatDate(obj));
          this.context.addSelfCare(formatedDateData);
      })
      .catch(error => {
        this.setState({ error });
      });
    }//end if newSC
    if(newMoods){
        fetch(`${config.API_ENDPOINT}api/moods`,{
          method: 'POST',
          body: JSON.stringify(newMoods),
           headers: {
           'content-type': 'application/json',
           'Authorization': `Bearer ${config.API_KEY}`
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
      }//end if newMood    
      this.props.history.push('/dashboard');
}//end of handleSubmit

validateTypeRating(){
    if(this.state.activity.value){
        if(!this.state.type.value || !this.state.rating.value){
            return "Please choose a type and rating for your activity";
        };
    };
}  
handleClickCancel = () => {
    this.props.history.push('/dashboard')
};
render(){   
  return(
    <section className="dailyform">
      <header>
        <Nav pageType={'interior'}/>
          <h2>Today's Wellbeing and Gratitude</h2>
      </header>
        <form className="daily-form" onSubmit={e=>this.handleSubmit(e)}>
          <fieldset className="gratitude-entries">
            <legend>I am grateful for...</legend>
              <input placeholder="yoga practice" type="text" name="gratitude"   id="gratitude"
                onChange={e => this.updateGratitude(e.target.value, e.target.id)}/>               
          </fieldset>
          <div className="activity-input-area">
            <fieldset>
              <legend>Today I...</legend>
                 <div className="activity-input">
                    <div className="content-input">
                      <label>Activity</label>
                        <input placeholder="read a book" type="text" name="activity" id="activity"
                         onChange={e => this.updateActivities(e.target.value, e.target.id)}/>
                    </div>
                    <label htmlFor="type">Type of Wellbeing</label>
                      <select id="type"
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
              <legend>How I am feeling today</legend>
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
                     (!this.state.activity.touched && !this.state.gratitude.touched) || 
                     this.validateTypeRating()}
                >
                 Submit</button>
                <button type="reset"
                  onClick={this.handleClickCancel}>
                 Cancel</button>
             </div>
        </form>
        <ButtonRow
          links ={[{'/dashboard':'Your Dashboard'},{'/past-care':'Your Past Care Entries'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'},{'/inspiration':'Get Inspired, Get Grateful'}]}
        />    
        </section>
      );
    }
}
export default DailyForm;