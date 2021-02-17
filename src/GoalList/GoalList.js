import React, { Component } from 'react'; 
import IEContext from '../IEContext';
import { Link } from 'react-router-dom';
import '../_styles/GoalList.css';

class GoalList extends Component{
    static contextType = IEContext;   
    //removing any empty values from display
    state={
        goals:[],
        user:""
    }

    render(){
        let goalsObj = this.context.goals;       
        //removing any empty values from being displayed
        let newObj = Object.entries(goalsObj).reduce(
            (newObj, [key, value])=>
            (value === 0 || key === 'id' || key === 'user_id') ? newObj : {...newObj, [key]:value}, {}
            );

        return(
            <section className="goals">
                <header>
                    <h3>Your Goals</h3>
                </header>
                <main>
                    <ul className="goal-list">
                        <li className="goal-item">
                            <span>Type of <br/>Wellbeing</span>
                            <span>Number of times (per week)</span>
                        </li>
                        {
                         Object.entries(newObj).map((entry,i)=> 
                            <li key={i} className="goal-item">
                                <span>{entry[0]}</span>
                                <span>{entry[1]}</span>
                            </li>)
                        }                 
                    </ul>
                    <Link className="button-link" to={`/goal-form/${this.state.user}`}>Update</Link>
                </main>
            </section>
        );
    }
}
export default GoalList;