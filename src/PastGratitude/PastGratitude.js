import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js';
import IEContext from '../IEContext';
import ButtonRow from '../ButtonRow/ButtonRow';
import Nav from '../Nav/Nav.js';
import config from '../../src/config';
import TokenService from '../services/token-service';
import {FormatDate} from '../Functions/FormatDate';

class PastGratitude extends Component{
    static contextType = IEContext;
    state = {
        user_id:"",     
        gratitudes:[]   
    };
    componentDidMount() {      
        const user_id = this.props.user_id;
        //this.context.setUserId(user_id);
        console.log(user_id)
        this.setState({
          user_id : user_id
        })
        fetch(`${config.API_ENDPOINT}api/gratitudes/${user_id}`,{
            method:'GET',
            headers:{
              'content-type': 'application/json',
              'Authorization': `Bearer ${TokenService.getAuthToken()}`,
            },    
          })
          
          .then(res=>{
            console.log("fetching gratitudes")
            if(!res.ok){
              throw new Error('Something went wrong, please try again later');
            }
            return res.json();
          })
          .then(data=>{
            
            let formatedDateData = data.map(obj=>FormatDate(obj));
            this.setState({
              gratitude_most_recent:formatedDateData,
            });
            this.setState({
              gratitudes:formatedDateData,
            });
          })
          .catch(err => {
            this.setState({
              error: err.message
            });
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
                    <EntryList typeOfResults = {'gratitudes'} results={this.state.gratitudes} />    
                    <ButtonRow
                        links ={
                               [{[`/dashboard/${this.state.user_id}`]:'Your Dashboard'},{[`/daily-form/${this.state.user_id}`]:'Daily Form'},{[`/past-care/${this.state.user_id}`]:'Your Past Selfcare'},{[`/goal-form/${this.state.user_id}`]:'Set Your Goals'}]
                               }
                    />               
                </main>
            </div>
        );       
    }
}
export default PastGratitude;