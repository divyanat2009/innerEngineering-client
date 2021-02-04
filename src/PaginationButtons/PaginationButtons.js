import React, { Component } from 'react'; 
import IEContext from '../IEContext'

class PaginationButtons extends Component{
    static contextType = IEContext;

    updateDisabled=(pageType,direction)=>{
        const numberOfResults = this.context[pageType].length;
        let currentPage = this.context.current_display[pageType].page;
        let lastPage = Math.ceil(numberOfResults/20);
        if(currentPage === 1 && currentPage === lastPage){
            this.context.updateDisabled(pageType, 'lessthan20');
        }
       else if(direction === 'reset'|| currentPage === 1){
         this.context.updateDisabled(pageType, 'start');
        }
       else if(currentPage !==1 && currentPage<lastPage){
            this.context.updateDisabled(pageType, 'mid');
        }
        else if(currentPage !==1 && currentPage>=lastPage){
           this.context.updateDisabled(pageType, 'end');
        };
     }

    nextPage=(direction)=>{
        //updateCurrentPage needs to happen before updateDisabled
        this.context.updateCurrentPage(this.props.pageType, direction);
        this.updateDisabled(this.props.pageType, direction);
     }

    render(){
        let pageType = this.props.pageType;
        let disabledButton = this.context.current_display[pageType].disabled;
        let disabledForward = false;
        let disabledBack = true;
        if(disabledButton ==='lessthan20'){
            disabledForward = true;
            disabledBack = true;
        }
        if(disabledButton === 'start'){
            disabledForward = false;
            disabledBack = true;
        }
        if(disabledButton ==='mid'){
            disabledForward = false;
            disabledBack = false;
        }
        if(disabledButton === 'end'){
            disabledForward = true;
            disabledBack = false;
        }

        return(
        <div className="pagination-button-row">
                 <button disabled={disabledForward} onClick = {e => this.nextPage('forward')}>Next 20</button>
                 <button disabled={disabledBack} onClick = {e => this.nextPage('back')}>Back</button>
                 <button onClick = {e => this.nextPage('reset')}>Reset</button>
        </div>
        );
    }
}
export default PaginationButtons;