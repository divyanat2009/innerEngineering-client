import React, { Component } from 'react'; 
import IEContext from '../IEContext';
import './FilterSortRow.css';

class FilterSortRow extends Component{
    static contextType = IEContext;
    render(){
        let filter = '';
        if(this.props.filterOptions==='date-only'){
            filter = (
             <form className="filter-sort-control">
                <div>
                    <label htmlFor="search-date">Search For a Date</label>
                    <input id="search-date" name="search-date" type="date"/>
                </div>
            </form>
            );
        }
        else if(this.props.filterOptions==='type-only'){
            filter =  (
            <form className="filter-sort-control">
                <div>
                <label htmlFor="type_filter">Filter by Type</label>                    
                    <select id="type_filter">
                        <option value="emotional">emotional wellbeing</option>
                        <option value="spiritual">spiritual growth</option>
                        <option value="physical">body</option>
                        <option value="food">food</option>
                    </select>
                </div>
            </form>
            );
        }
        else if(this.props.filterOptions==='all')
            {  
              filter = (
                <form className="filter-sort-control">
                    <div>
                        <label htmlFor="search-date">Search For a Date</label>
                        <input id="search-date" name="search-date" type="date"/>
                    </div>
                    <div>
                        <label htmlFor="sort">Sort By</label>
                        <select id="sort">
                            <option value="by_date">Date</option>
                            <option value="by_rating">Rating</option>
                        </select>
                    </div>
                    <div>
                    <label htmlFor="type_filter">Filter by Type</label>                    
                        <select id="type_filter">
                            <option value="emotional">emotional wellbeing</option>
                            <option value="spiritual">spiritual growth</option>
                            <option value="physical">body</option>
                            <option value="food">food</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="rating_filter">Filter by Your Rating</label>
                        <select id="rating_filter">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </form>
                );
            }
    
        return(    
                   filter
        );
    }
}

export default FilterSortRow;