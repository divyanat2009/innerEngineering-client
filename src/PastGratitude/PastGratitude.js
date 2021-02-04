import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js';
import IEContext from '../IEContext';
import ButtonRow from '../ButtonRow/ButtonRow';
import Nav from '../Nav/Nav.js';

class PastGratitude extends Component{
    static contextType = IEContext;
    render(){
        return(
            <div className="past-gratitude">
                <header>
                <Nav pageType={'interior'}/>
                    <h2>Your Gratitude Entries</h2>
                </header>
                <main>
    
                    <FilterSortRow  filterOptions = {'date-only'}  pageType={'gratitudes'}/>
                    <EntryList typeOfResults = {'gratitudes'} />    
                    <ButtonRow
                        links ={
                               [{'/dashboard':'Your Dashboard'},{'/daily-form':'Today\'s Wellbeing & Gratitude'},{'/past-care':'Your Past Care Entries'},{'/goal-form':'Set Your Goals'}]
                               }
                    />               
                </main>
            </div>
        );       
    }
}
export default PastGratitude;