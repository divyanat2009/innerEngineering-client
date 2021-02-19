import React, { Component } from 'react'; 
import MostRecent from '../MostRecent/MostRecent';
import VisualData from '../VisualData/VisualData';

class Progress extends Component{
    state={
        user_id:""
    }
    render(){
       
        return(
            <section className="progress">
               <MostRecent user={this.props.user_id}/>
               <VisualData user={this.props.user_id}/>
            </section>
        )
    }
}

export default Progress;