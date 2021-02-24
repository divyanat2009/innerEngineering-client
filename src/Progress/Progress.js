import React, { Component } from 'react'; 
import IEContext from '../IEContext';
import MostRecent from '../MostRecent/MostRecent';
import VisualData from '../VisualData/VisualData';

class Progress extends Component{
  static contextType = IEContext;
    render(){
      const user_id=this.props.user_id;
      console.log(user_id)
        return(
            <section className="progress">
               <MostRecent user_id={user_id}/>
               <VisualData user_id={user_id}/>
            </section>
        )
    }
}

export default Progress;