import React, { Component } from 'react';
import About from '../About/About';
import '../_styles/Home.css';
import Nav from '../Nav/Nav.js';

class Home extends Component{
state = {
        isBoxVisible:false,
        scrollPosition:0,
        statsRef:React.createRef(),
};

startExploring = () => {
    this.setState(prevState => 
        ({ isBoxVisible: !prevState.isBoxVisible })
    );
    this.props.history.push('/dashboard');
};

signUpPopUp=()=>{
    this.setState(prevState => 
        ({ isBoxVisible: !prevState.isBoxVisible })
    );
    this.props.history.push('/user-signup');
}

signUpInClick=()=>{
   this.setState(prevState => 
      ({ isBoxVisible: !prevState.isBoxVisible })
    );
    this.props.history.push('/user-signin');
}

learnMore=()=>{
    if(this.state.isBoxVisible){
      this.setState(prevState => 
        ({ isBoxVisible: !prevState.isBoxVisible })
        );
    }
    //need to scroll to learn more
    if(this.state.statsRef.current){
        this.state.statsRef.current.scrollIntoView({ 
           behavior: "smooth", 
           block: "start"
        });
    }
}

    render(){
        
        return(
            <div className="home">
              <Nav pageType={'home'} onSignUpPopUp = {this.signUpPopUp} onSignUpInClick = {this.signUpInClick} gotoLearnMore = {this.gotoLearnMore}/>
                <header className="header-home">
                    <h1>Inner Engineering</h1>
                    <h2 className="tagline">As there is a science and technology to create external well-being, there is a whole dimension of science and technology for inner well-being.</h2>
                       <button className="button" onClick={this.learnMore}>Learn More</button>     
                                         
                 </header>
                 <main>                    
                    <div ref={this.state.statsRef}></div> 
                    <About/>                                             
                 </main>                 
            </div>
        );
    }
}
export default Home;