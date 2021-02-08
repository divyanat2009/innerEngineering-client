import React, { Component } from 'react'; 
import ButtonRow from '../ButtonRow/ButtonRow';
import Progress from '../Progress/Progress';
import RandomQuote from '../RandomQuote/RandomQuote.js';
import '../_styles/Dashboard.css';
import Nav from '../Nav/Nav.js';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <header>
                <Nav pageType={'interior'}/>
                    <h2>Your Inner Engineering Dashboard</h2>
                   <RandomQuote/>   
                   <Link className="button-link block-link" to={`/daily-form`}>Today's Wellbeing &amp; Gratitude</Link>                
                </header>
                <main>     
                  <Progress/>               
                  <ButtonRow
                     links ={
                        [{'/past-care':'Your Past Wellbeing'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'}]
                        }
                  />
                </main>
            </div>
        );
    }
}

export default Dashboard;