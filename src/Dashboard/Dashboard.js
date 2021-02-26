import React, { Component } from 'react'; 
import ButtonRow from '../ButtonRow/ButtonRow';
import Progress from '../Progress/Progress';
import RandomQuote from '../RandomQuote/RandomQuote.js';
import '../_styles/Dashboard.css';
import Nav from '../Nav/Nav.js';
import {Link} from 'react-router-dom';
import IEContext from '../IEContext';
import config from '../../src/config';
import TokenService from '../services/token-service';
import {FormatDate} from '../Functions/FormatDate';

class Dashboard extends Component{
  static contextType = IEContext;
  constructor(props){
    super(props);
    this.state = {
        user_id:"",
        selfcares:[],
        gratitudes:[],
        moods:[]
    };
  }
    componentDidMount() {      
      const user_id = this.props.match.params.id;      
      this.context.setUserId(user_id);        
      this.setState({
        user_id : user_id
      });

     //getting gratitudes
      fetch(`${config.API_ENDPOINT}api/gratitudes/${user_id}`,{
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

  //getting selfcares
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
  fetch(`${config.API_ENDPOINT}api/quotes`,{
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
    this.setState({
      quotes:data,
     });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })
  //getting goals
  fetch(`${config.API_ENDPOINT}api/goals/${user_id}`,{
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
    let lastEntry = data.length
    this.setState({
      goals:data[lastEntry-1],
     });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  })//end of fetch for goals

 //getting moods
  fetch(`${config.API_ENDPOINT}api/moods/${user_id}`,{
    method:'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${TokenService.getAuthToken()}`
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
      moods:formatedDateData,
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
            <div className="dashboard">
                <header>
                <Nav pageType={'interior'} user_id={this.state.user_id}/>
                    <h2>Your Inner Engineering Dashboard</h2>
                   <RandomQuote/>   
                   <Link className="button-link block-link" to={`/daily-form/${this.state.user_id}`}>Today's Selfcare &amp; Gratitude</Link>                
                </header>
                <main>     
                  <Progress user_id={this.state.user_id} selfcares={this.state.selfcares} gratitudes={this.state.gratitudes} moods={this.state.moods}/>  
                  <ButtonRow
                     links ={
                        [{[`/past-care/${this.state.user_id}`]:'Your Past Selfcares'},{[`/past-gratitude/${this.state.user_id}`]:'Your Past Gratitudes'},{[`/goal-form/${this.state.user_id}`]:'Set Your Goals'}]
                        }
                      />
                </main>
            </div>
        );
    }
}

export default Dashboard;