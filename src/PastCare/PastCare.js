import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js';
import IEContext from '../IEContext';
import ButtonRow from '../ButtonRow/ButtonRow';
import Nav from '../Nav/Nav.js';

class PastCare extends Component{
    static contextType = IEContext;
    state = {
        user_id:"",        
    }
    componentDidMount() {      
        const user_id = this.props.match.params.id;
        this.context.setUserId(user_id);
        console.log(user_id)
        this.setState({
          user_id : user_id
        })
      }
    render(){
        return(
            <div className="past-care">
                <header>
                <Nav pageType={'interior'} user_id={this.state.user_id}/>
                  <h2>Your Well-Being Entries</h2>
                </header>
                <main>
                    <FilterSortRow filterOptions = {'all'} pageType={'selfcares'}/>
                    <EntryList typeOfResults = {'selfcares'}/> 
                    <ButtonRow
                        links ={
                               [{[`/dashboard/${this.state.user_id}`]:'Your Dashboard'},{[`/daily-form/${this.state.user_id}`]:'Today\'s Wellbeing & Gratitude'},{[`/past-gratitude/${this.state.user_id}`]:'Your Past Gratitudes'},{[`/goal-form/${this.state.user_id}`]:'Set Your Goals'}]
                               }
                    />                       
                </main>
            </div>
        );       
    }
}
export default PastCare;