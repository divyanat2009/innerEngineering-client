import React, { Component } from 'react'; 
import MostRecent from '../MostRecent/MostRecent';
import VisualData from '../VisualData/VisualData';

class Progress extends Component{
    render(){
        return(
            <section className="progress">
               <MostRecent/>
               <VisualData/>
            </section>
        )
    }
}

export default Progress;