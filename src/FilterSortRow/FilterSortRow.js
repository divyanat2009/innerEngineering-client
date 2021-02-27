import React, { Component } from 'react'; 
import IEContext from '../IEContext';

class FilterSortRow extends Component{
    static contextType = IEContext;
    constructor(props){
        super(props);
        this.state={
          search_date:"all"
    };
}

updateDate=(date)=>{
    this.setState(
        {search_date:date}
    );
};

updateType=(typeSelected)=>{
  this.context.updateTypeSelected(this.props.pageType, typeSelected);
};
updateRating=(ratingSelected)=>{
  this.context.updateRatingSelected(this.props.pageType, ratingSelected);
};

handleSubmitDate=(e)=>{
    e.preventDefault()
    const {search_date} = this.state;
    this.context.updateDateSelected(this.props.pageType,search_date);
    e.target.search_date.value="";
}    

render(){
  let filter = '';
    if(this.props.filterOptions==='date-only'){
      filter = (
      <div className="filter-sort-control filter-dates-only">
        <form className="filter-sort-control " onSubmit={e => this.handleSubmitDate(e)}>        
          <label htmlFor="search_date">Search For a Date</label>
          <input id="search_date" name="search_date" type="date"
          onChange={e => this.updateDate(e.target.value)}/>
          <button className="button" type="submit">Search</button>
          <button className="button" onClick = {e => {this.updateDate('all'); this.context.updateDateSelected(this.props.pageType,'all')}}>All Dates</button>
        </form>
      </div>
      );
    }
    else if(this.props.filterOptions==='type-only'){
       filter =  (
         <div className="filter-sort-control filter-type-only">
            <label htmlFor="type_filter">Filter by Type</label>                    
            <select id="type_filter"
             onChange={e=>this.updateType(e.target.value)}
            >
            <option value="all">all</option>
            <option value="emotional">emotional</option>
            <option value="spiritual">spiritual</option>
            <option value="physical">physical</option>
            <option value="intellectual">energy</option>
                    </select>
                </div>
            )}
    else if(this.props.filterOptions==='all'){
        filter = (
          <div className="filter-sort-control filter-all">
             <div className="filter-sort-control ">
                <form className="filter-sort-control-form" onSubmit={e => this.handleSubmitDate(e)}>        
                  <label htmlFor="search_date">Search For a Date</label>
                  <input id="search_date" name="search_date" type="date"
                   onChange={e => this.updateDate(e.target.value)}/>
                  <button className="button" type="submit">Search</button>
                  <button className="button" onClick = {e => {this.updateDate('all'); this.context.updateDateSelected(this.props.pageType,'all')}}>All Dates</button>
                </form>
              </div>
           <div>
              <label htmlFor="type_filter">Filter by Type</label>                    
                <select id="type_filter"
                 onChange={e=>this.updateType(e.target.value)}
                >
                 <option value="all">all</option>
                 <option value="emotional">emotional</option>
                 <option value="spiritual">spiritual</option>
                 <option value="physical">physical</option>
                 <option value="intellectual">energy</option>
                </select>
            </div>
            <div>
                <label htmlFor="rating_filter">Filter by Your Rating</label>
                  <select id="rating_filter"
                   onChange={e=>this.updateRating(e.target.value)}>
                     <option value="all">all</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                   </select>
            </div>
        </div>
        );
    }
    
    return(    
       filter
    );
  }
}
export default FilterSortRow;