import React, { Component } from 'react';
import About from '../About/About';
import ButtonRow from '../ButtonRow/ButtonRow.js';
import './Home.css';

class Home extends Component{
    render(){
        return(
            <div className="home">
                <header>
                    <h1>Inner Engineering</h1>
                    <h2 className="tagline">As there is a science and technology to create external well-being, there is a whole dimension of science and technology for inner well-being.</h2>
                    
                 </header>
                 <main>                   
                     <ButtonRow
                        links ={
                            [{'/dashboard':'Start'},{'/#about':'Learn More'}]
                        }/>
                    <About/>
                    
                 </main>
                 
            </div>
        );
    }
}

export default Home;