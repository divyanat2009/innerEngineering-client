import React, {Component} from 'react';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import Nav from '../Nav/Nav';   

class UserSignIn extends Component {
    static defaultProps = {
      onLoginSuccess: () => {}
    };
    state = { 
       loading: false,
       error: null 
    };
    
    handleSubmitJwtAuth = ev => {
      ev.preventDefault()
      this.setState({ 
        loading: true, 
        error: null });
      const { username, password } = ev.target;
      AuthApiService.postLogin({
        username: username.value,
        password: password.value,
      })
        .then(res => {
          username.value = ''
          password.value = ''
          TokenService.saveAuthToken(res.authToken)
          this.props.onLoginSuccess()
          this.setState({
            loading: false
          });  
          this.props.history.push('/dashboard/'+res.username);           
        })
        .catch(res => {
          this.setState({ error: res.error })
        });
    }
    render() {            
        return(
          <div className="account-page">
            <Nav pageType={'account'}/>
                        
                <form className="update-account-form" onSubmit={this.handleSubmitJwtAuth}>
                    <h2>My Account</h2>                    
                    <p>Please enter your username and password to SignIn.</p>
                    
                    <div className="form-field-group">
                        <label htmlFor="username">UserName</label>
                        <input placeholder="user123" type="username" name='username' id='username' required/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="password">Password</label>
                        <input placeholder="*******" type="password" name='password' id='password' autoComplete="new-password" required/>
                    </div>
                    <button type="submit">SignIn</button>                    
                   </form> 
                                                 
            </div>
        );
    }
}
export default UserSignIn;