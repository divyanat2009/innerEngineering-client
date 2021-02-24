import React, { Component } from 'react'; 
import ChartLine from '../Chart/ChartLine.js';
import Chart from '../Chart/Chart';
import IEContext from '../IEContext';


class VisualData extends Component{
    static contextType = IEContext;
    render(){
      const user_id=this.props.user_id;
      console.log(user_id)
        return(
            <section className="visual-data">     
               <Chart user_id={user_id}/>                             
               <ChartLine user_id={user_id}/>
            </section>
        )
    }
}

export default VisualData;