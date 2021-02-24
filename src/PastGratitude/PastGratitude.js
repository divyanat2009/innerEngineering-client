import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js';
import IEContext from '../IEContext';
import ButtonRow from '../ButtonRow/ButtonRow';
import Nav from '../Nav/Nav.js';

class PastGratitude extends Component{
    static contextType = IEContext;
    static contextType = IEContext;
    constructor(props){
      super(props);
      this.state = {
          user_id:""
      };
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
            <div className="past-gratitude">
                <header>
                <Nav pageType={'interior'} user_id={this.state.user_id}/>
                    <h2>Your Gratitude Entries</h2>
                </header>
                <main>
    
                    <FilterSortRow  filterOptions = {'date-only'}  pageType={'gratitudes'}/>
                    <EntryList typeOfResults = {'gratitudes'} />    
                    <ButtonRow
                        links ={
                               [{[`/dashboard/${this.state.user_id}`]:'Your Dashboard'},{[`/daily-form/${this.state.user_id}`]:'Daily Form'},{[`/past-care/${this.state.user_id}`]:'Your Past Wellbeing'},{[`/goal-form/${this.state.user_id}`]:'Set Your Goals'}]
                               }
                    />               
                </main>
            </div>
        );       
    }
}
export default PastGratitude;