import React, { Component } from 'react'; 
import IEContext from '../IEContext'
import EntryItem from '../EntryItem/EntryItem.js'
//import '../_styles/EntryList.css'


class EntryList extends Component{
    static contextType = IEContext;
    nextPage=(direction)=>{
        //updateCurrentPage needs to happen before updateDisabled
        this.context.updateCurrentPage(this.props.typeOfResults, direction);
    };
    render(){
        let {typeOfResults} = this.props;
        let results = this.context[typeOfResults];
        let page = this.context.current_display[typeOfResults].page;
        let selectedType = this.context.current_display[typeOfResults].type;
        let selectedDate = this.context.current_display[typeOfResults].date_to;
        let selectedRating = this.context.current_display[typeOfResults].rating;
        let sortedResults = results;
        if(results[0].date_modified){
            sortedResults = results.sort((a,b)=>
                b.date_modified > a.date_modified ? 1 : b.date_modified < a.date_modified ? -1 : 0
            );
        }           
       //filters for type selected
        if(selectedType !== 'all' && selectedType){         
            results = sortedResults.filter(result=>
                result.type.includes(selectedType))         
        };
        //filter for date
        if(selectedDate !== 'all' && selectedDate){         
            results = sortedResults.filter(result=>
            result.date_modified.includes(selectedDate))         
        };
            //filter for rating
        if(selectedRating !== 'all' && selectedRating){         
            results = sortedResults.filter(result=>
            (result.rating).toString().includes(selectedRating.toString())   
            );        
        } 
       //pagination of results
      let numberOfResults=results.length;
        let arrayStart = ((page - 1)*20);
        let arrayEnd = (arrayStart + 20);
        let pageCurrentPageResults = [];
        let disabledForward = false;
        let disabledBack = true;
        let disabledStart = false;

        if(arrayEnd >= numberOfResults){
            disabledForward = true;
            disabledBack = true;
            disabledStart = true;
        };
  
        if(arrayEnd <= numberOfResults){
            for (let i=arrayStart;i<arrayEnd; i++){
            let resultsObj = results[i];
                pageCurrentPageResults = [...pageCurrentPageResults, resultsObj]
            }
            results = pageCurrentPageResults;
            disabledStart = false;
        }
        else{
            for (let i=arrayStart;i<numberOfResults; i++){
                let resultsObj = results[i];
                pageCurrentPageResults = [...pageCurrentPageResults, resultsObj]
            }
              disabledForward = true;
              disabledBack = false;
              disabledStart = false;
              results = pageCurrentPageResults;
        }
        
    
        return(
            <section className="results-list">                 
               <ul className="result-list">                      
                  {results.map((entry,i)=> 
                  <EntryItem typeOfResults = {typeOfResults}
                             key={i}{...entry}
                  />
                  )}
                </ul>
                <div className="pagination-button-row">
                    <button disabled={disabledForward} onClick = {e => this.nextPage('forward')}>Next 20</button>
                    <button disabled={disabledBack} onClick = {e => this.nextPage('back')}>Back</button>
                    <button disabled={disabledStart} onClick = {e => this.nextPage('reset')}>Start</button>
                </div>
            </section>
        );
    }
}

export default EntryList;