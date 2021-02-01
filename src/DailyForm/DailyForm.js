import React, { Component } from 'react';
import './DailyForm.css';

class DailyForm extends Component{
    render(){
        return(
            <section className="dailyform">
                <header>
                    <h1>Today's Inner Engineering and Gratitude</h1>
                </header>
                <form class="daily-form">
                    <div className="date-option">
                        <label htmlFor="date" >Today</label>
                        <select id="date">
                            <option value="1">Today</option>
                            <option value="0">Yesterday</option>
                        </select>
                    </div>
                    <fieldset className="gratitude-entries">
                        <legend>I am grateful for...</legend>
                        <input placeholder="my morning yoga practice" type="text" name="gratitude-1" id="gratitude-1"/>
                        <input placeholder="catching up with mom" type="text" name="gratitude-2" id="gratitude-2"/>
                        <input placeholder="playing with Neel" type="text" name="gratitude-3" id="gratitude-3"/>
                    </fieldset>
                    <div className="activity-input-area">
                        <fieldset>
                        <legend>Today's Wellbeing</legend>
                            <div class="activity-input">
                                <div className="content-input">
                                    <label>Activity</label>
                                    <input placeholder="meditation" type="text" name="activity-1" id="activity-1"/>
                                </div>
                                <label htmlFor="type1">Type of Care</label>
                                <select id="type1">
                                    <option value="Food">Food</option>
                                    <option value="physical">Body</option>
                                    <option value="emotional">Emotional Wellbeing</option>
                                    <option value="spiritual">Spiritual Growth</option>
                                </select>
                                <label htmlFor="rating1">Rating</label>
                                <select id="rating1">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select> 
                            </div>    
                        </fieldset>                  
                    <fieldset>
                       <legend>Today's Well-Being</legend>
                            <div class="activity-input">
                                <div className="content-input">
                                    <label>Activity</label>
                                    <input placeholder="a morning walk" type="text" name="activity-2" id="activity-2"/>
                                </div>
                                <label htmlFor="type2">Type of Care</label>
                                <select id="type2">
                                    <option value="food">Food</option>
                                    <option value="physical">Body</option>
                                    <option value="emotional">Emotional Wellbeing</option>
                                    <option value="spiritual">Spiritual Growth</option>
                                </select>
                                <label htmlFor="rating2">Rating</label>
                                <select id="rating2">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select> 
                            </div>                      
                    </fieldset>
                    <fieldset>
                        <legend>Today's Well-Being</legend>
                            <div class="activity-input">
                             <div className="content-input">
                                <label>Activity</label>
                                <input placeholder="morning yoga practice" type="text" name="activity-3" id="activity-3"/>
                              </div>
                                <label htmlFor="type3">Type of Care</label>
                                <select id="type3">
                                    <option value="Food">Food</option>
                                    <option value="physical">Body</option>
                                    <option value="emotional">Emotional Wellbeing</option>
                                    <option value="spiritual">Spiritual Growth</option>
                                </select>
                                <label htmlFor="rating3">Rating</label>
                                <select id="rating3">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>                       
                    </fieldset>  
                </div>  
                <fieldset className="mood-input">
                    <legend>How do I today?</legend>
                    <label htmlFor="mood">My Mood</label>
                    <select id="mood">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>      
                    <label htmlFor="energy">My Energy-level</label>
                    <select id="energy">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>       
                </fieldset>                
             <div className="button-row">    
                <button type="submit">Submit</button>
                <button type="input">Cancel</button>
             </div>
            </form>
        </section>
        );
    }
}
export default DailyForm;