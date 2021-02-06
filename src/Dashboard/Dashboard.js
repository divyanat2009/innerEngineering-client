import React, { Component } from 'react'; 
import ButtonRow from '../ButtonRow/ButtonRow';
import Progress from '../Progress/Progress';
import RandomQuote from '../RandomQuote/RandomQuote.js';
import '../_styles/Dashboard.css';
import Nav from '../Nav/Nav.js';

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <header>
                <Nav pageType={'interior'}/>
                    <h2>Your Inner Engineering Dashboard</h2>
                   <RandomQuote/>                   
                </header>
                <main>     
                  <Progress/>               
                  <ButtonRow
                     links ={
                        [{'/daily-form':'Today\'s Wellbeing & Gratitude'},{'/past-care':'Your Past Wellbeing'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'}]
                        }
                  />
                </main>
            </div>
        );
    }
}

export default Dashboard;