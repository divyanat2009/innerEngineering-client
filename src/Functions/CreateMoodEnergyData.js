export const CreateMoodEnergyData = (data) =>{
   
    let date = new Date();
      
    //let allSelfCares = this.context.selfcares;
    let currentMonth = date.toString().slice(4,8) ;
    let monthResults=[];
    
      monthResults = data.filter(day=>
          day.date_formatted.slice(0,4).includes(currentMonth));
    
     let monthMoodData =[];
     let monthEnergyData =[];
    
     for (let i=1; i <= monthResults.length ; i++){
        let newMoodObj = {"x":monthResults[i-1].date_modified.slice(8,10),"y":monthResults[i-1].mood_level};
        let newenergyObj = {"x":monthResults[i-1].date_modified.slice(8,10),"y":monthResults[i-1].energy_level};
         monthMoodData.push(newMoodObj);
         monthEnergyData.push(newenergyObj);
     }
    
     let lineData = [
         {"id": "mood",
          "color": "hsl(82, 39%, 39%)",
          "data":monthMoodData
         },      
          { "id": "energy-level",
          "color": "hsl(126, 70%, 0%)",
          "data": monthEnergyData
         }];
   
      return(lineData);
    }  