import React, { Component } from 'react'; 
import ButtonRow from '../ButtonRow/ButtonRow';
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
                    <ButtonRow
                        links ={
                                [{'/daily-form':'Today\'s Care & Gratitude'},{'/past-care':'Your Past Self-Care'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'}]
                               }
                    />
                </main>
            </div>
        );
    }
}

export default Dashboard;