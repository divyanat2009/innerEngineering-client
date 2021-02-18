import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js';
import IEContext from '../IEContext';
import ButtonRow from '../ButtonRow/ButtonRow';
import Nav from '../Nav/Nav.js';

class PastCare extends Component{
    static contextType = IEContext;
    state = {
        user:"",        
    }
    componentDidMount() {
      const user = this.props.match.params.id;
      this.setState({
        user : user
      })
    } 
    render(){
        return(
            <div className="past-care">
                <header>
                <Nav pageType={'interior'} user={this.state.user}/>
                  <h2>Your Well-Being Entries</h2>
                </header>
                <main>
                    <FilterSortRow filterOptions = {'all'} pageType={'selfcares'}/>
                    <EntryList typeOfResults = {'selfcares'}/> 
                    <ButtonRow
                        links ={
                               [{[`/dashboard/${this.state.user}`]:'Your Dashboard'},{[`/daily-form/${this.state.user}`]:'Today\'s Wellbeing & Gratitude'},{[`/past-gratitude/${this.state.user}`]:'Your Past Gratitudes'},{[`/goal-form/${this.state.user}`]:'Set Your Goals'}]
                               }
                    />                       
                </main>
            </div>
        );       
    }
}
export default PastCare;