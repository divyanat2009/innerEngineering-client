import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {API_ENDPOINT} from '../config';

class UserSignUp extends Component{
  state = {   
    fullname: "",
    username: "",
    password: ""
  };

  setForm(e)
  {
    const {name, value} = e.target;
    this.setState({
        [name] : value
    });
  }
  signupUser = (e) =>  { 
      e.preventDefault();
      fetch(API_ENDPOINT+'/users', {
        method:'post',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify({
          fullname:this.state.fullname,
          username:this.state.username,
          password: this.state.password 
        })
      })
      .then(response=> response.json())
      .then(response=>{
        alert("Thank you for signing up!");
        this.props.history.push('/user-signin');
        //window.location.href = BASE_URL_FRONTEND+"/my-account";
      })
      .catch(err=> alert(err));
  }
    render(){
        return(
            <div>
              <main>
                <Link to={'/user-signin'}>Sign In</Link>
                <form method="post" className="signup-form" onSubmit={e=>this.signupUser(e)}>
                <h2>Sign-up to begin your Inner Engineering journey!</h2>
                <label htmlFor="first-name">Full Name</label>
                <input placeholder='Full Name' type="text" name='fullname' id='fullname' required
                onChange={e=>this.setForm(e)}/>               
                <label htmlFor="last-name">UserName</label>
                <input placeholder="UserName" type='text' name='username' id='username' required
                 onChange={e=>this.setForm(e)} />                
                <label htmlFor="password">Password</label>
                <input placeholder="*******" type="password" name='password' id='password' required
                 onChange={e=>this.setForm(e)}/>
                <button type="submit">Sign Up</button>                
                </form>
              
              </main>
            </div>

        )
    }
}
export default UserSignUp;