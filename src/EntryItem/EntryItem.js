import React, { Component } from 'react'; 
import IEContext from '../IEContext';



class EntryItem extends Component{
    static contextType = IEContext;    
   
    render(){   
        
        const {content, type, rating, typeOfResults, date_formatted } = this.props;
        let listItem = '';
        if(typeOfResults==='selfcares'){
            listItem = (<li key={this.props.selfcare_id} className="result-item">
            <span className="result-content">{content}</span>
            <span className="result-date">{date_formatted}</span>
            <span className="result-type">Type : {type}</span>
            <span className="result-rating">Rating : {rating}</span>
            </li> 
            );
        }
        else if(typeOfResults === 'gratitudes'){
            listItem = (<li key={this.props.gratitude_id} className="result-item">
            <span className="result-content">{content}</span>
            <span className="result-date">{date_formatted}</span>
            </li> 
            );
        }    
       
        return(
            listItem
        );
    }
}

export default EntryItem;