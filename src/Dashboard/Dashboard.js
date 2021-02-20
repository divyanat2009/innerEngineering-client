import React, { Component } from 'react'; 
import ButtonRow from '../ButtonRow/ButtonRow';
import Progress from '../Progress/Progress';
import RandomQuote from '../RandomQuote/RandomQuote.js';
import '../_styles/Dashboard.css';
import Nav from '../Nav/Nav.js';
import {Link} from 'react-router-dom';
import IEContext from '../IEContext';

class Dashboard extends Component{
  static contextType = IEContext;
  constructor(props){
    super(props);
    this.state = {
        user_id:""
    }
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
            <div className="dashboard">
                <header>
                <Nav pageType={'interior'} user_id={this.state.user_id}/>
                    <h2>Your Inner Engineering Dashboard</h2>
                   <RandomQuote/>   
                   <Link className="button-link block-link" to={`/daily-form/${this.state.user_id}`}>Today's Wellbeing &amp; Gratitude</Link>                
                </header>
                <main>     
                  <Progress user_id={this.state.user_id}/>  
                  <ButtonRow
                     links ={
                        [{[`/past-care/${this.state.user_id}`]:'Your Past Wellbeing'},{[`/past-gratitude/${this.state.user_id}`]:'Your Past Gratitudes'},{[`/goal-form/${this.state.user_id}`]:'Set Your Goals'}]
                        }
                      />
                </main>
            </div>
        );
    }
}

export default Dashboard;