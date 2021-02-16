import React, { Component } from 'react'; 
import IEContext from '../IEContext';
import ActivityList from '../ActivityList/ActivityList';
import GoalList from '../GoalList/GoalList';


class MostRecent extends Component{
    static contextType = IEContext;
     state={
         user:"",
         selfcares:[],
         gratitudes:[]
     }
    render(){
        return(
            <section className="most-recent">
                <header>
                    <h3>What's Been Happening?</h3>
                </header>
                <main>
                    <ActivityList
                       typePage={'selfcares'}
                       list = {this.context.selfcares}
                       listHeading = {'Your Most Recent Wellbeing Activities'}
                       random = {false} />
                    <ActivityList
                       typePage={'gratitudes'}
                       list = {this.context.gratitudes}
                       listHeading = {`Your Most Recent Gratitudes`} 
                       random = {true}/>
                     <GoalList/>
                </main>
            </section>
        );
    }
}
export default MostRecent;