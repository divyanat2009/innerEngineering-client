import React, { Component } from 'react';
import EntryList from '../EntryList/EntryList.js';
import FilterSortRow from '../FilterSortRow/FilterSortRow.js';
import IEContext from '../IEContext';
import ButtonRow from '../ButtonRow/ButtonRow';
import Nav from '../Nav/Nav.js';
import config from '../../src/config';
import TokenService from '../services/token-service';
import {FormatDate} from '../Functions/FormatDate';

class PastCare extends Component{
    static contextType = IEContext;
    state = {
        user_id:"",       
        selfcares:[] 
    }
    componentDidMount() {      
        const user_id = this.props.match.params.id;
        this.context.setUserId(user_id);        
        this.setState({
          user_id : user_id
        });

        fetch(`${config.API_ENDPOINT}api/selfcares/${user_id}`,{
            method:'GET',
            headers:{
              'content-type': 'application/json',
              'Authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
          })
          .then(res=>{
            if(!res.ok){
              throw new Error('Something went wrong, please try again later');
            }
            return res.json();
          })
          .then(data=>{              
           let formatedDateData = data.map(obj=>FormatDate(obj));
        
            this.setState({      
              selfcares:formatedDateData,
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
            <div className="past-care">
                <header>
                <Nav pageType={'interior'} user_id={this.state.user_id}/>
                  <h2>Your Selfcare Entries</h2>
                </header>
                <main>
                    <FilterSortRow filterOptions = {'all'} pageType={'selfcares'}/>
                    <EntryList typeOfResults = {'selfcares'} results={this.state.selfcares}/> 
                    <ButtonRow
                        links ={
                               [{[`/dashboard/${this.state.user_id}`]:'Your Dashboard'},{[`/daily-form/${this.state.user_id}`]:'Today\'s Selfcare & Gratitude'},{[`/past-gratitude/${this.state.user_id}`]:'Your Past Gratitudes'},{[`/goal-form/${this.state.user_id}`]:'Set Your Goals'}]
                               }
                    />                       
                </main>
            </div>
        );       
    }
}
export default PastCare;