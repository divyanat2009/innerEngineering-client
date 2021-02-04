import React, { Component } from 'react'; 
import MostRecent from '../MostRecent/MostRecent';


class Progress extends Component{
    render(){
        return(
            <section className="progress">
               <MostRecent/>                
            </section>
        );
    }
}
export default Progress;