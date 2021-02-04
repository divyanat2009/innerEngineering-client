export const updateTypeSelectedTest=(typeOfPage,selectedType)=>{
    const {current_display} = context;
    current_display[typeOfPage].type = selectedType;
    setState({current_display:current_display})
  }
  
export const updateDisabledTest=(typeOfPage, direction)=>{
    const {current_display} = context;
    current_display[typeOfPage].disabled = direction;
    this.setState({current_display:current_display})
  }
  
export const updateDateSelectedTest=(typeOfPage, date)=>{
    const {current_display} = context;
    current_display[typeOfPage].date_to = date;
    this.setcontext({current_display:current_display})
  }
  
export const updateRatingSelectedTest=(typeOfPage, ratingSelected)=>{
    const {current_display} = context;
    current_display[typeOfPage].rating = ratingSelected;
    this.State({current_display:current_display});
  }