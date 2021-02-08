import React, { Component } from 'react'; 
import ChartLine from '../Chart/ChartLine.js';

class VisualData extends Component{
    render(){
        return(
            <section className="visual-data">
                    <ChartLine/>
            </section>
        );
    }
}

export default VisualData;