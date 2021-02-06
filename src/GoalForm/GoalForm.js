import React, { Component } from 'react';
import IEContext from '../IEContext.js';
import '../_styles/Form.css';
import config from '../config.js';
import ButtonRow from '../ButtonRow/ButtonRow';
import Nav from '../Nav/Nav.js';

class GoalForm extends Component{
 static contextType = IEContext;
 constructor(props){
     super(props);
     this.state={
        emotional:{
            value:0,
            touched:false,
        },
       
        spiritual:{
            value:0,
            touched:false,
        },
        
        energy:{
            value:0,
            touched:false,
        },
       
        physical:{
            value:0,
            touched:false,
        },
       
     };
 }

updateCare=(number, inputId)=>{
    if(inputId==='emotional')
    {this.setState(
        {emotional:{value:number , touched: true}
      });
    }
    if(inputId==='physical')
    {this.setState(
        {physical:{value:number , touched: true}
      });
    }
    if(inputId==='energy')
    {this.setState(
        {energy:{value:number , touched: true}
      });
    }
    if(inputId==='spiritual')
    {this.setState(
        {spiritual:{value:number , touched: true}
      });
    }
}

handleSubmit=(e)=>{
  e.preventDefault();
  const { emotional, physical, spiritual, energy } = this.state;
  const goals = {
        "emotional": emotional.value,
        "spiritual":spiritual.value,
        "physical":physical.value,
        "energy":energy.value
  };

  fetch(`${config.API_ENDPOINT}api/goals`,{
    method: 'POST',
    body: JSON.stringify(goals),
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
      this.context.updateGoals(data);
      this.props.history.push('/dashboard');
  })
  .catch(error => {
    this.setState({ error })
  })
}
handleClickCancel = () => {
    this.props.history.push('/dashboard')
};

  render(){
      return(
        <div className="goalform">
            <header>
               <Nav pageType={'interior'}/>
                  <h2>Your Goals</h2>
            </header>
            <main>
               <form className="goal-form" onSubmit={e=>this.handleSubmit(e)}>
                   <div className="form-intro">
                       <p>Please use this form to set a goal for yourself in the different areas of well-being.</p>
                       <p>We know everyone is unique, so select the areas you want to focus on. Feel free to leave any area as "no interest" that you're not interested in.</p>
                       <p>Please select a number of times each week you would like to give yourself that type of care.</p>
                   </div>
                   <fieldset>
                      <legend>Emotional Wellbeing</legend>
                         <select id="emotional"
                            onChange={e => this.updateCare(e.target.value, e.target.id)}>
                                <option value="0">no interest</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">more than 7</option>
                          </select>
                    </fieldset>
                    <fieldset>
                      <legend>Spiritual Growth</legend>
                          <select id="spiritual"
                            onChange={e => this.updateCare(e.target.value, e.target.id)}>
                                <option value="0">no interest</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">more than 7</option>
                            </select>
                    </fieldset>
                    <fieldset>
                       <legend>Energy-wise Care</legend>
                          <select id="energy"
                            onChange={e => this.updateCare(e.target.value, e.target.id)}>
                                <option value="0">no interest</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">more than 7</option>
                           </select>
                    </fieldset>
                    <fieldset>
                        <legend>Physical Wellbeing</legend>
                           <select id="physical"
                            onChange={e => this.updateCare(e.target.value, e.target.id)}>
                                <option value="0">no interest</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">more than 7</option>
                            </select>
                        </fieldset> 
                        <div className="button-row">   
                            <button type="submit">Submit</button>
                            <button type="input" onClick={this.handleClickCancel}>Cancel</button>    
                        </div>        
                    </form>
                    <ButtonRow
                        links ={
                               [{'/dashboard':'Your Dashboard'},{'/daily-form':'Today\'s Wellbeing & Gratitude'},{'/past-care':'Your Past Wellbeing Entries'},{'/past-gratitude':'Your Past Gratitudes'}]
                               }
                    />    
                </main>
            </div>
        );
    }
}

export default GoalForm;