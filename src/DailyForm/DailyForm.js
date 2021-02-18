import React, { Component } from 'react';
import TokenService from '../services/token-service';
import '../_styles/Form.css';
import ValidationError from '../ValidationError/ValidationError.js';
import IEContext from '../IEContext.js';
import config from '../config.js';
import { FormatDate } from '../Functions/FormatDate';
import ButtonRow from '../ButtonRow/ButtonRow';
import Nav from '../Nav/Nav.js';

class DailyForm extends Component{

static contextType = IEContext;

constructor(props){
    super(props);
    console.log("id"+this.props.match.params.id)
    this.state={
        date:{
            value:"1",
            touched:false
        },
        gratitude1:{
            value:"",
            touched:false
        },
        gratitude2:{
            value:"",
            touched:false
        },
        gratitude3:{
            value:"",
            touched:false
        },
        activity1:{
            value:"",
            touched:false
        },
        activity2:{
            value:"",
            touched:false
        },
        activity3:{
            value:"",
            touched:false
        },
        type1:{
            value:"",
            touched:false
        },
        type2:{
            value:"",
            touched:false
        },
        type3:{
            value:"",
            touched:false
        },
        rating1:{
            value:"",
            touched:false
        },
        rating2:{
            value:"",
            touched:false
        },
        rating3:{
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
        user_id: this.props.match.params.id,
        addGratitude:[],
        addMoods:[],
        addSelfCare:[]
    };
}

updateGratitude=(gratitude, inputId)=>{
if(inputId==='gratitude1')
  {
    this.setState({
      gratitude1:{value: gratitude, touched: true}
    });
  };
  if(inputId==='gratitude2')
  {
    this.setState({
      gratitude2:{value: gratitude, touched: true}
    });
  };
  if(inputId==='gratitude3')
  {
    this.setState({
      gratitude3:{value: gratitude, touched: true}
    }
  )};
}

updateActivities=(activity, inputId)=>{
    if(inputId==='activity1')
      {
        this.setState({
          activity1:{value: activity, touched: true}
      }
    )};
    if(inputId==='activity2')
      {
        this.setState({
          activity2:{value: activity, touched: true}
        });
      };
    if(inputId==='activity3')
      {
        this.setState({
          activity3:{value: activity, touched: true}
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
    if(inputId==='type2')
      {
        this.setState({
          type2:{value: type, touched: true}
       });
    };
      if(inputId==='type3')
      {
        this.setState({
          type3:{value: type, touched: true}
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
      if(inputId==='rating2')
      {
        this.setState({
          rating2:{value: rating, touched: true}
        });
      };
      if(inputId==='rating3')
      {
        this.setState({
          rating3:{value: rating, touched: true}
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
    const { gratitude1, gratitude2, gratitude3, activity1, activity2, activity3, type1, type2, type3, rating1, rating2, rating3, mood, energy } = this.state;
     
    const user_id = this.props.match.params.id;

    //this will be based on the date input    
    //add selfcare
    let newSelfCare={};
    //1st input field
    if(activity1.value){
      newSelfCare = {
        //user_id:user_id,
        content:activity1.value,
        type:type1.value,
        rating:rating1.value,
      }
      //2nd input field
    if(activity2.value){
      const newSelfCare2 = {
      //user_id:user_id,
      content:activity2.value,
      type:type2.value,
      rating:rating2.value,
      }
      newSelfCare = [...newSelfCare, newSelfCare2];
    };
    //3rd input field
    if(activity3.value){
      const newSelfCare3 = {
      //user_id:user_id,
      content:activity3.value,
      type:type3.value,
      rating:rating3.value,
      }
      newSelfCare = [...newSelfCare, newSelfCare3];
    };
  };
  //add gratitude
    let newGratitude={};
    if(gratitude1.value){
      newGratitude = {
      //user_id:user_id,
      content:gratitude1.value,
      }
    if(gratitude2.value){
      const newGratitude2 = {
        //user_id:user_id,
        content:gratitude2.value,
      };
      newGratitude = [...newGratitude, newGratitude2];
    };
    if(gratitude3.value){
      const newGratitude3 = {
      //user_id:user_id,
      content:gratitude3.value,
    }
      newGratitude = [...newGratitude, newGratitude3];
  };
    
};
 //add energy and mood
  let newMoods={};
    if(energy.value && mood.value){
       newMoods = {
         energy_level:energy.value,
         mood_level:mood.value,
        };
  // this.context.addMoods(newMoods);
  };
  if(newGratitude.length !== 0){        
  
  fetch(`${config.API_ENDPOINT}api/gratitudes/`+user_id,{
    method: 'POST',
    body: JSON.stringify(newGratitude),
    headers: {
     'content-type': 'application/json',
     'authorization': `bearer ${TokenService.getAuthToken()}`,
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
        this.props.addGratitude(formatedDateData);
      })
      .catch(error => {
        this.setState({ error })
      });
    }//end of newGratitude

  if(newSelfCare.length !== 0){    
    //const user_id = this.props.match.params.username;
    //const newSelfCare=this.state;
    fetch(`${config.API_ENDPOINT}api/selfcares/`+user_id,{
      method: 'POST',
      body: JSON.stringify(newSelfCare),
      headers: {
       'content-type': 'application/json',
       'authorization': `bearer ${TokenService.getAuthToken()}`,
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
         this.props.addSelfCare(formatedDateData);
      })
      .catch(error => {
        this.setState({ error });
      });
    }//end if newSC
    if(newMoods){      
      //const user_id = this.props.match.params.username;
      //const newMoods=this.state;
        fetch(`${config.API_ENDPOINT}api/moods/`+user_id,{
          method: 'POST',
          body: JSON.stringify(newMoods),
           headers: {
           'content-type': 'application/json',
           'authorization': `bearer ${TokenService.getAuthToken()}`,
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
            this.props.addMoods(formatedDateData);
        })
        .catch(error => {
          this.setState({ error });
        });
      }//end if newMood
      
  this.props.history.push(`/dashboard/${this.state.user_id}`);
}//end of handleSubmit

validateActivityInputs(){
    if(
      (this.state.activity2.value && !this.state.activity1.value)|| 
      (this.state.activity3.value && !this.state.activity2.value)
      ){
        return "Please fill out the fields in order from top to bottom";
    };
}

validateGratitudeInputs(){
    if(
      (this.state.gratitude2.value && !this.state.gratitude1.value)||
       (this.state.gratitude3.value && !this.state.gratitude2.value)
      ){
        return "Please fill out the fields in order from top to bottom";
    };
}

validateTypeRating(){
    if(this.state.activity1.value){
        if(!this.state.type1.value || !this.state.rating1.value){
            return "Please choose a type and rating for your activity";
        };
    }
    if(this.state.activity2.value){
        if(!this.state.type2.value || !this.state.rating2.value){
            return "Please choose a type and rating for your activity";
        };
    }
    if(this.state.activity3.value){
        if(!this.state.type3.value || !this.state.rating3.value){
            return "Please choose a type and rating for your activity";
        };
    };
}

handleClickCancel = () => {
    this.props.history.push(`/dashboard/${this.state.user_id}`);
};

    render(){
        const gratitudeError = this.validateGratitudeInputs();
        const activityError = this.validateActivityInputs();
        
        return(
            <section className="dailyform">
                <header>
                    <Nav pageType={'interior'} user_id={this.state.user_id}/>
                    <h2>Today's Wellbeing and Gratitude</h2>
                </header>
                <form className="daily-form" onSubmit={e=>this.handleSubmit(e)}>
                  
                    <fieldset className="gratitude-entries">
                        <legend>I am grateful for...</legend>
                        <input placeholder="a morning walk" type="text" name="gratitude1"   id="gratitude1"
                        onChange={e => this.updateGratitude(e.target.value, e.target.id)}/>
                        <input placeholder="catching up with mom in a Zoom chat" type="text" name="gratitude2" id="gratitude2"
                        disabled={!this.state.gratitude1.touched}
                        onChange={e => this.updateGratitude(e.target.value, e.target.id)}/>
                        <input placeholder="watching Neel grow up" type="text" name="gratitude3" id="gratitude3"
                        disabled={!this.state.gratitude2.touched}
                        onChange={e => this.updateGratitude(e.target.value, e.target.id)}/>
                        {this.validateGratitudeInputs() && (<ValidationError message={gratitudeError} />
        )}
                    </fieldset>
                   
                    <div className="activity-input-area">
                        <fieldset>
                        <legend>Today I...</legend>
                            <div className="activity-input">
                                <div className="content-input">
                                    <label>Activity</label>
                                    <input placeholder="a morning walk" type="text" name="activity1" id="activity1"
                                    onChange={e => this.updateActivities(e.target.value, e.target.id)}/>
                                </div>
                                <label htmlFor="type1">Type of Wellbeing</label>
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
                    <fieldset>
                       <legend>Today I...</legend>
                            <div className="activity-input">
                                <div className="content-input">
                                    <label>Activity</label>
                                    <input placeholder="a morning walk" type="text" name="activity2" id="activity2"
                                    disabled={!this.state.activity1.touched}
                                    onChange={e => this.updateActivities(e.target.value, e.target.id)}/>
                                </div>
                                <label htmlFor="type2">Type of Wellbeing</label>
                                <select id="type2"
                                disabled={!this.state.activity2.touched}
                                onChange={e => this.updateActivityType(e.target.value, e.target.id)}>
                                    <option value="">Select</option>
                                    <option value="emotional">Emotional</option>
                                    <option value="physical">Physical</option>
                                    <option value="energy">Energy</option>
                                    <option value="spiritual">Spiritual</option>
                                </select>
                                <label htmlFor="rating2">Rating</label>
                                <select id="rating2"
                                disabled={!this.state.activity2.touched}
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
                    <fieldset>
                        <legend>Today I...</legend>
                            <div className="activity-input">
                             <div className="content-input">
                                <label>Activity</label>
                                <input placeholder="a morning walk" type="text" name="activity3" id="activity3"
                                disabled={!this.state.activity2.touched}
                                onChange={e => this.updateActivities(e.target.value, e.target.id)}/>
                              </div>
                                <label htmlFor="type3">Type of Wellbeing</label>
                                <select id="type3"
                                disabled={!this.state.activity3.touched}
                                onChange={e => this.updateActivityType(e.target.value, e.target.id)}>
                                    <option value="">Select</option>
                                    <option value="emotional">Emotional</option>
                                    <option value="physical">Physical</option>
                                    <option value="energy">Energy</option>
                                    <option value="spiritual">Spiritual</option>
                                </select>
                                <label htmlFor="rating3">Rating</label>
                                <select id="rating3"
                                disabled={!this.state.activity3.touched}
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
                    {this.validateActivityInputs() && (<ValidationError message={activityError} />)}
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
                     (!this.state.activity1.touched && !this.state.gratitude1.touched) || 
                     this.validateTypeRating() || 
                     this.validateActivityInputs() ||
                     this.validateGratitudeInputs()}
                     >
                    Submit</button>
                <button type="reset"
                onClick={this.handleClickCancel}>
                    Cancel</button>
             </div>
            </form>
            <ButtonRow
                links ={[{[`/dashboard/${this.state.user_id}`]:'Your Dashboard'},
                         {[`/past-care/${this.state.user_id}`]:'Your Past Wellbeing'},
                         {[`/past-gratitude/${this.state.user_id}`]:'Your Past Gratitudes'},
                         {[`/goal-form/${this.state.user_id}`]:'Set Your Goals'}]}
            />    
        </section>
        );
    }
}
export default DailyForm;