import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js';
import IEContext from '../IEContext';
import ButtonRow from '../ButtonRow/ButtonRow';
import Nav from '../Nav/Nav.js';

class PastCare extends Component{
    static contextType = IEContext;
    render(){
        return(
            <div className="past-care">
                <header>
                <Nav pageType={'interior'}/>
                  <h2>Your Well-Being Entries</h2>
                </header>
                <main>
                    <FilterSortRow filterOptions = {'all'} pageType={'selfcares'}/>
                    <EntryList typeOfResults = {'selfcares'}/> 
                    <ButtonRow
                        links ={
                               [{'/dashboard':'Your Dashboard'},{'/daily-form':'Today\'s Wellbeing & Gratitude'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'}]
                               }
                    />                       
                </main>
            </div>
        );       
    }
}
export default PastCare;