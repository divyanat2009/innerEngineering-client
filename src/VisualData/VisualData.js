import React, { Component } from 'react'; 
import ChartLine from '../Chart/ChartLine.js';
import Chart from '../Chart/Chart';

class VisualData extends Component{
    render(){
        return(
            <section className="visual-data">     
               <Chart/>                             
               <ChartLine/>
            </section>
        )
    }
}

export default VisualData;