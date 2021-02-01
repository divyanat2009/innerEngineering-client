import React, { Component } from 'react'; 
import Progress from '../Progress/Progress';
import ButtonRow from '../ButtonRow/ButtonRow';
import RandomQuote from '../RandomQuote/RandomQuote.js';
import './Dashboard.css';



class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <header>
                    <h1>Your Inner Engineering Dashboard</h1>
                   <RandomQuote/>
                </header>
                <main>
                    <Progress/>
                    <ButtonRow
                        links ={[{'/daily-form':'Today\'s Wellbeing & Gratitude'},{'/past-care':'Your Past Wellbeing Entries'},{'/past-gratitude':'Your Past Gratitudes'},{'/goal-form':'Set Your Goals'}]}
                        />
                </main>
            </div>
        )
    }
}

export default Dashboard;