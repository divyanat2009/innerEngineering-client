export const FormatDate = obj =>{
 
    let year = obj.date_modified.slice(0,4);
    let month = obj.date_modified.slice(5,7);
    let day = obj.date_modified.slice(8,10);
    if(month === '01'){
      month = 'Jan'
    };
    if(month === '02'){
     month = 'Feb'
   };
   if(month === '03'){
     month = 'Mar'
   };
   if(month === '04'){
     month = 'Apr'
   };
   if(month === '05'){
     month = 'May'
   };
   if(month === '06'){
     month = 'Jun'
   };
   if(month === '07'){
     month = 'Jul'
   };
   if(month === '08'){
     month = 'Aug'
   };
   if(month === '09'){
     month = 'Sep'
   };
   if(month === '10'){
     month = 'Oct'
   };
   if(month === '11'){
     month = 'Nov'
   };
   if(month === '12'){
     month = 'Dec'
   };
   let newDate = `${month} ${day} ${year}`;
   let newObj = obj = {...obj, date_formatted:newDate};
   return newObj;
   }
