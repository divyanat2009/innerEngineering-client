import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="footer-section">
                    <p>footer-section1</p>
                </div>
                <div className="footer-section">
                    <p>footer-section2</p>
                </div>
                <div className="footer-section">
                    <p>footer-section3</p>
                </div>
                <div className="footer-section">
                    <p>footer-section4</p>
                </div>
            </footer>
        );
    }
}

export default Footer;