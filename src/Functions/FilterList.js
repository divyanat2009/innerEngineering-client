export const FilterList = (results,selectedType, selectedDate, selectedRating) =>{
    let filteredResults = results;
     //filters for type selected
     if(selectedType !== 'all' && selectedType){         
         filteredResults = results.filter(result=>
             result.type.includes(selectedType))         
    };
     //filter for date
     if(selectedDate !== 'all' && selectedDate){         
         filteredResults = results.filter(result=>
         result.date_modified.includes(selectedDate))         
    };
    //filter for rating
     if(selectedRating !== 'all' && selectedRating){         
         filteredResults = results.filter(result=>
         (result.rating).toString().includes(selectedRating.toString())   
         )        
    };
    return(filteredResults);
 
 }