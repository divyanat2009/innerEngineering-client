import React, { Component } from 'react'; 
import IEContext from '../IEContext';
import { Link } from 'react-router-dom';


class ActivityList extends Component{
    static contextType = IEContext;

    render(){            
        const user_id=this.props.user_id;
        
        //getting the url for the "See All" button
        let linkURL = '/';
        if(this.props.typePage ==='selfcares'){
         linkURL = `/past-care/${user_id}`
        }
        else if(this.props.typePage ==='gratitudes'){
            linkURL = `/past-gratitude/${user_id}`
        };
          
        let results = this.props.list.slice(0, 3);
        return(
            <section className="recent-activities">
                <Link className="button-link" to={linkURL}>See All</Link>
                   <ul className="recent-activities-list">
                      <li >{this.props.listHeading}</li>                            
                       {
                        results.map((entry,i)=> 
                        <li key={i} className="recent-activities-item">
                        <span>{entry.content}</span>
                        <span>{entry.date_formatted}</span>
                       </li>)
                        }                
                    </ul>
            </section>
            );
       }
   }
   
   export default ActivityList;