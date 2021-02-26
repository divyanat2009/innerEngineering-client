import React, { Component } from 'react'; 
import ChartLine from '../Chart/ChartLine.js';
import Chart from '../Chart/Chart';
import IEContext from '../IEContext';


class VisualData extends Component{
    static contextType = IEContext;
    render(){
      const user_id=this.props.user_id;      
        return(
            <section className="visual-data">     
               <Chart user_id={user_id} selfcares={this.props.selfcares}/>                             
               <ChartLine user_id={user_id} moods={this.props.moods}/>
            </section>
        );
    }
}

export default VisualData;