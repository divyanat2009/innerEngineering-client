import React, { Component } from 'react'; 
import IEContext from '../IEContext';
import EntryItem from '../EntryItem/EntryItem.js';
import './EntryList.css';

class EntryList extends Component{
    static contextType = IEContext;

    render(){
        const { results, typeOfResults} = this.props;
        return(
            <section className="results-list">
                    <ul className="result-list">                      
                        {
                        results.map((entry,i)=> 
                        <EntryItem typeOfResults = {typeOfResults} key={i} {...entry}/>
                        )}
                    </ul>
            </section>
        );
    }
}

export default EntryList;