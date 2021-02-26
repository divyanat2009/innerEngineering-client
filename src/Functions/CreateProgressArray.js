export const CreateProgressArray = (data) =>{
    let progressEnergy = 0;
    let progressEmotional =0;
    let progressPhysical = 0;
    let progressSpiritual = 0;

    let date = new Date();

    //let allSelfCares = this.context.selfcares;
    let currentMonth = date.toString().slice(4,8) ;
    let monthResults=[];

   // if(data[0].date_formatted)
    //{
      monthResults = data.filter(care=>
          care.date_formatted.slice(0,4).includes(currentMonth)) 
     //}     
    
    monthResults.forEach(obj=>{
        if(obj.type==="energy"){
            progressEnergy = progressEnergy+1
        }
        else if(obj.type==="emotional"){
            progressEmotional = progressEmotional+1
        }
        else if(obj.type==="spiritual"){
            progressSpiritual = progressSpiritual+1
        }
        else if(obj.type==="physical"){
            progressPhysical = progressPhysical+1
        }
    })
    let progressArray = [progressEnergy,progressEmotional, progressSpiritual,progressPhysical]

return progressArray;
}