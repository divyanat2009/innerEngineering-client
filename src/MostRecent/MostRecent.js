import React, { Component } from 'react'; 
import IEContext from '../IEContext';
import ActivityList from '../ActivityList/ActivityList';
import GoalList from '../GoalList/GoalList';


class MostRecent extends Component{
    static contextType = IEContext;    
     
    render(){    
        const user_id=this.props.user_id;  
        console.log(user_id)  
        return(
            
            <section className="most-recent">                
                <header>
                    <h3>What's Been Happening?</h3>
                </header>
                <main>
                    <ActivityList   
                       user_id={user_id}                                         
                       typePage={'selfcares'}
                       list = {this.context.selfcares}
                       listHeading = {'Your Most Recent Wellbeing Activities'}
                       random = {false} />
                    <ActivityList         
                       user_id={user_id}                                    
                       typePage={'gratitudes'}
                       list = {this.context.gratitudes}
                       listHeading = {`Your Most Recent Gratitudes`} 
                       random = {true}/>
                     <GoalList user_id={user_id}/>
                </main>
            </section>
        
        );
    }
}
export default MostRecent;