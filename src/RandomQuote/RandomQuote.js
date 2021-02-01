import React, { Component } from 'react';
import IEContext from '../IEContext.js';


class RandomQuote extends Component{
    static contextType = IEContext;

    chooseQuote=()=>{
        let numberOfQuotes = this.context.quotes.length;
        let quotePickNumber = Math.floor(Math.random() * (numberOfQuotes));
        let quote = this.context.quotes[quotePickNumber].content;
        console.log(quotePickNumber);
        return quote;
    }
    render(){
        return(
            <div className="quote">
               <p>Today's Quote : "{this.chooseQuote()}"</p>
            </div>
        );
    }
}

export default RandomQuote;