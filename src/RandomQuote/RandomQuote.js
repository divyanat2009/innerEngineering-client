import React, { Component } from 'react';
import IEContext from '../IEContext.js';


class RandomQuote extends Component{
    static contextType = IEContext;

    state = {
        dailyQuote:'',
        author:'',
        chooseQuoteRan:false,
     };

     chooseQuote=()=>{
       
        let numberOfQuotes = this.context.quotes.length;
        let quotePickNumber = Math.floor(Math.random() * (numberOfQuotes));
        let quote = this.context.quotes[quotePickNumber].content;
        let author = this.context.quotes[quotePickNumber].author;
        
        this.setState({
            choseQuoteRan:true, dailyQuote:quote, author:author
        }); 
        //return quote
     }
componentDidMount(){
    this.chooseQuote();
}
    
    render(){
        return(
            <div className="quote">
                <p>"{this.state.dailyQuote}"</p>
                <p className="quote-author">-{this.state.author}</p>                
            </div>
        );
    }
}

export default RandomQuote;