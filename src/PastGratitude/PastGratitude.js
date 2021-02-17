import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js';
import IEContext from '../IEContext';
import ButtonRow from '../ButtonRow/ButtonRow';
import Nav from '../Nav/Nav.js';

class PastGratitude extends Component{
    static contextType = IEContext;
    state = {
        user:"",        
    }
    componentDidMount() {
      const user = this.props.match.params.username;
      this.setState({
        user : user
      })
    } 
    render(){
        return(
            <div className="past-gratitude">
                <header>
                <Nav pageType={'interior'} user={this.state.user}/>
                    <h2>Your Gratitude Entries</h2>
                </header>
                <main>
    
                    <FilterSortRow  filterOptions = {'date-only'}  pageType={'gratitudes'}/>
                    <EntryList typeOfResults = {'gratitudes'} />    
                    <ButtonRow
                        links ={
                               [{[`/dashboard/${this.state.user}`]:'Your Dashboard'},{[`/daily-form/${this.state.user}`]:'Daily Form'},{[`/past-care/${this.state.user}`]:'Your Past Wellbeing'},{[`/goal-form/${this.state.user}`]:'Set Your Goals'}]
                               }
                    />               
                </main>
            </div>
        );       
    }
}
export default PastGratitude;