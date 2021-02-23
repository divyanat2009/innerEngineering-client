import React, { Component } from 'react'; 
import MostRecent from '../MostRecent/MostRecent';
import VisualData from '../VisualData/VisualData';
import config from '../config';
import TokenService from '../services/token-service';
import {  FormatDate} from '../Functions/FormatDate';


class Progress extends Component{
    state={
        user_id:"",
        selfcares:[],
        gratitudes:[]        
    }
    componentDidMount(){
        const user_id = this.props.match.params.id;
        this.context.setUserId(user_id);
        console.log(TokenService.getAuthToken());
        fetch(`${config.API_ENDPOINT}api/gratitudes/${this.state.user_id}`,{
            method:'GET',
            headers:{
              'content-type': 'application/json',
              'Authorization': `Bearer ${TokenService.getAuthToken()}`,
            },    
          })          
          .then(res=>{
            console.log("fetching gratitudes")
            console.log(res)
            if(!res.ok){

              throw new Error('Something went wrong, please try again later');
            }
            return res.json();
          })
          .then(data=>{
            console.log(data);
            let formatedDateData = data.map(obj=>FormatDate(obj));
            this.setState({
              gratitude_most_recent:formatedDateData,
            });
            this.setState({
              gratitudes:formatedDateData,
            });
          })
          .catch(err => {
              console.log(err)
            this.setState({
              error: err.message
            });
          })
          fetch(`${config.API_ENDPOINT}api/selfcares/${this.state.user_id}`,{
            method:'GET',
            headers:{
              'content-type': 'application/json',
              'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
          })
          .then(res=>{
            if(!res.ok){
              throw new Error('Something went wrong, please try again later');
            }
            return res.json();
          })
          .then(data=>{    
              console.log(data)
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
        console.log("progress rendered")
        console.log(this.state.gratitudes);
        const user_id= this.props.user_id
        return(
            <section className="progress">
               <MostRecent user_id={user_id} gratitudes={this.state.gratitudes} selfcares={this.state.selfcares}/>
               <VisualData user_id={user_id}/>
            </section>
        )
    }
}

export default Progress;