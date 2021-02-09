import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import {API_ENDPOINT} from '../config';
import {BASE_URL_FRONTEND} from '../config';    
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class UserSignIn extends Component{
    state = {
        isBoxVisible:false,
        username: "",
        password: ""
    }
    
    closeWindow=()=>{
        this.setState({ isBoxVisible: false });
    } 
    setForm(e)
   {
    const {name, value} = e.target;    
    this.setState({
        [name] : value
    });
   }
    signIn = (e) =>  { 
        e.preventDefault();
        fetch(API_ENDPOINT+'/users/checkuser/'+this.state.username, {
          method:'post',
          headers:{
              'Content-Type' : 'application/json'
            },
          body:JSON.stringify({
            password: this.state.password 
          })
        })
        .then(response=> response.json())
        .then(response=>{
            if(response) 
            {            
                cookies.set('token', response.token, { path: '/' });
                window.location.href = BASE_URL_FRONTEND+"/"+this.state.username+"/dashboard";
            };
        })
        .catch(err=> alert(err));
    }   
    render(){      
        
        return(
          <div className="account-page">
            <Nav pageType={'account'}/>
                        
                <form className="update-account-form" onSubmit={e=>this.signIn(e)}>
                    <h2>My Account</h2>                    
                    <p>Please enter your username and password to SignIn.</p>
                    
                    <div className="form-field-group">
                        <label htmlFor="username">UserName</label>
                        <input placeholder="user123" type="username" name='username' id='username' required onChange={(e)=>this.setForm(e)}/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="password">Password</label>
                        <input placeholder="*******" type="password" name='password' id='password' autoComplete="new-password" required onChange={(e)=>this.setForm(e)}/>
                    </div>
                    <button type="submit">SignIn</button>                    
                   </form> 
                                                 
            </div>
        );
    }
}
export default UserSignIn;