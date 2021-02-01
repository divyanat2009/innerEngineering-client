import React, { Component } from 'react';
import IEContext from '../IEContext.js';
import './GoalForm.css';

class GoalForm extends Component{
 static contextType = IEContext;
 constructor(props){
     super(props);
     this.state={
        emotional:{
            value:"",
            touched:false,
        },
       
        spiritual:{
            value:"",
            touched:false,
        },
        
        food:{
            value:"",
            touched:false,
        },
       
        body:{
            value:"",
            touched:false,
        },
       
     }
 }

 updateCare=(number, inputId)=>{
    if(inputId==='emotional')
    {
      this.setState(
        {
         emotional:{value:number , touched: true}
        })
    };
    if(inputId==='body')
    {
      this.setState(
        {
         body:{value:number , touched: true}
        })
    };
    if(inputId==='food')
    {
      this.setState(
        {
          food:{value:number , touched: true}
        })
    };
    if(inputId==='spiritual')
    {
      this.setState(
        {spiritual:{value:number , touched: true}
       })
    };
}

handleSubmit=(e)=>{
  e.preventDefault();
  const { emotional, body, spiritual, food } = this.state;
  const goals = {
        "emotional": emotional.value,
        "spiritual":spiritual.value,
        "body":body.value,
        "food":food.value
  };
  this.context.updateGoals(goals);
  this.props.history.push('/dashboard');
}

    render(){
        return(
            <div className="goalform">
                <header>
                    <h1>Your Goals</h1>
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
                            <legend>Food Care</legend>
                            <select id="food"
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
                            <legend>Physical Care</legend>
                            <select id="body"
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
                            <button type="input">Cancel</button>    
                        </div>        
                    </form>
                </main>
            </div>
        );
    }
}
export default GoalForm;