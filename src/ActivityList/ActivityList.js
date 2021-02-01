import React, {Component} from 'react';
import IEContext from '../IEContext';
import { Link } from 'react-router-dom';
import './ActivityList.css';

class ActivityList extends Component {
  static contextType=IEContext;
    render() { 
      let linkURL = '/';
      if (this.props.typePage=== 'activity'){
          linkURL='/past-care';
      }
      else if(this.props.typePage==='gratitude'){
          linkURL='/past-gratitude';
      }
      let results = this.props.list;
        return (
            <section className="recent-activities">
                <Link className="button-link" to={linkURL}>See All</Link>
                <ul className="recent-activities-list">
                    <li>
                        {this.props.listHeading}
                    </li>
                    {results.map(entry=>
                        <li key={entry.id} className="recent-activities-item">
                            <span>{entry.content}</span>
                            <span>{entry.date}</span>
                        </li>)}
                </ul>
            </section>
          );
    }
}
 
export default ActivityList;