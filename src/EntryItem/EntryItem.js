import React, { Component } from 'react'; 
import IEContext from '../IEContext';
import './EntryItem.css';

class EntryItem extends Component{
    static contextType = IEContext;
    
    render(){   
        
        const {content, date, type, rating, typeOfResults } = this.props;        
        let listItem = '';
        if(typeOfResults==='Self-Care'){
            listItem = (<li key={this.props.selfcare_id} className="result-item">
            <span className="result-content">{content}</span>
            <span className="result-date">{date}</span>
            <span className="result-type">Type : {type}</span>
            <span className="result-rating">Your rating : {rating}</span>
            </li> );
        }
        else if(typeOfResults === 'Gratitude'){
            listItem = (<li key={this.props.gratitude_id} className="result-item">
            <span className="result-content">{content}</span>
            <span className="result-date">{date}</span>
            </li> );
        }      
       
        return(
            listItem
        );
    }
}

export default EntryItem;