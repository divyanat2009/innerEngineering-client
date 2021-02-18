import React, { Component } from 'react'; 
import ButtonRow from '../ButtonRow/ButtonRow';
import Progress from '../Progress/Progress';
import RandomQuote from '../RandomQuote/RandomQuote.js';
import '../_styles/Dashboard.css';
import Nav from '../Nav/Nav.js';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
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
            <div className="dashboard">
                <header>
                <Nav pageType={'interior'} user={this.state.user}/>
                    <h2>Your Inner Engineering Dashboard</h2>
                   <RandomQuote/>   
                   <Link className="button-link block-link" to={`/daily-form/${this.state.user}`}>Today's Wellbeing &amp; Gratitude</Link>                
                </header>
                <main>     
                  <Progress/>  
                  {/*<Link className="button-link" to={`/past-care/${this.state.user}`}>Your Past Wellbeing</Link>
                  <Link className="button-link" to={`/daily-gratitude/${this.state.user}`}>Your Past Gratitudes</Link>
        <Link className="button-link" to={`/goal-form/${this.state.user}`}>Set your Goals</Link>*/}

                  <ButtonRow
                     links ={
                        [{[`/past-care/${this.state.user}`]:'Your Past Wellbeing'},{[`/past-gratitude/${this.state.user}`]:'Your Past Gratitudes'},{[`/goal-form/${this.state.user}`]:'Set Your Goals'}]
                        }
                      />
                </main>
            </div>
        );
    }
}

export default Dashboard;