import React from 'react';

const IEContext = React.createContext({
      selfcares:{
        "gratitude_id":"1",
        "user_id":"1",
        "content":"A catch up phone call with mom",
        "date_modified":"January 27th 2021",
        "type":"emotional",
        "rating":"5",           
    },
      gratitudes:{
        "gratitude_id":"1",
        "user_id":"1",
        "content":"A catch up phone call with mom",
        "date_modified":"January 7th 2021"           
     },
      goals:{
        "emotional": "4",
        "spiritual":"7",
        "physical":"5",
        "intellectual":"7"
    },
     
      quotes:{
        "id":"1",
        "content":"The grass isn't greener on the other side of the fence, the grass is greener where you water it",
        "author": "anonymous",
     },
      moods:{
        "id":"1",
        "user_id":"1",
        "mood_level":"4",
        "energy_level":"5",
        "date_modified":"2021-02-14T19:10:27.090Z",   
    },
      current_gratitude_results_page:1,
      current_selfcares_results_page:1,
      addSelfCare:()=>{},
      addGratitude:()=>{},
      addMoods:()=>{},
      updateGoals:()=>{},
      updateCurrentPage:()=>{},
      current_display:{
        gratitudes:{page:1, date_to:'all', date_from:''},
        selfcares :{page:1, date_to:'all', date_from:'', type:'all',rating:'all'}
      },
      updateTypeSelected:()=>{},
      updateDateSelected:()=>{},
      updateRatingSelected:()=>{},
      updateNumberofTotalResults:()=>{}, 
      setUserId:()=>{},
      user_id:""    
     
});

export default IEContext;