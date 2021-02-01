import React, { Component } from 'react'; 
import MostRecent from '../MostRecent/MostRecent';
import GoalList from '../GoalList/GoalList';

class Progress extends Component{
    render(){
        return(
            <section className="progress">
               <MostRecent/>            
               <GoalList/>
            </section>
        );
    }
}

export default Progress;