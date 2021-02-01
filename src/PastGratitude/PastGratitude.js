import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js';
import IEContext from '../IEContext';


class PastGratitude extends Component{
    static contextType = IEContext;
    render(){
        return(
            <div className="past-gratitude">
                <header>
                    <h1>Your Gratitude Entries</h1>
                </header>
                <main>
                    <FilterSortRow filterOptions = {'date-only'}/>
                    <EntryList typeOfResults = {'Gratitude'} results ={this.context.gratitude}/>                   
                </main>
            </div>
        );       
    }
}
export default PastGratitude;