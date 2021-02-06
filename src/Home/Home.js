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
}

signUpInClick=()=>{
   this.setState(prevState => 
      ({ isBoxVisible: !prevState.isBoxVisible })
    );
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
        const { isBoxVisible } = this.state;
        return(
            <div className="home">
            
            <Nav pageType={'home'} onSignUpInClick = {this.signUpInClick} gotoLearnMore = {this.gotoLearnMore}/>
                <header className="header-home">
                    <h1>Inner Engineering</h1>
                    <h2 className="tagline">As there is a science and technology to create external well-being, there is a whole dimension of science and technology for inner well-being.</h2>
                       <button className="button" onClick={this.learnMore}>Learn More</button>                        
                 </header>
                 <main> 
                    <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
                       <p>Thanks for your interest in Inner Engineering!</p><p>This is the Beta version so we are not yet allowing users to sign-up. Please explore around and check back soon!</p>
                        <button className="button" onClick={this.startExploring}>Explore</button>                        
                    </div> 
                    <div ref={this.state.statsRef}></div> 
                    <About/>                   
                                            
                 </main>                 
            </div>
        );
    }
}
export default Home;