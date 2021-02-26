import React, { Component } from 'react'; 
import IEContext from '../IEContext';
import MostRecent from '../MostRecent/MostRecent';
import VisualData from '../VisualData/VisualData';

class Progress extends Component{
  static contextType = IEContext;
    render(){
      const user_id=this.props.user_id;
      
        return(
            <section className="progress">
               <MostRecent user_id={user_id} selfcares={this.props.selfcares} gratitudes={this.props.gratitudes}/>
               <VisualData user_id={user_id} selfcares={this.props.selfcares} moods={this.props.moods}/>
            </section>
        )
    }
}

export default Progress;