import React from 'react';

 const IEContext= React.createContext({
     selfCare:[],
     gratitude:[],
     goals:{},
     quotes:[],
     addSelfCare:()=>{},
     addGratitude:()=>{},
     addEnergy:()=>{},
     addMood:()=>{},
     updateGoals:()=>{}
 })

export default IEContext; 