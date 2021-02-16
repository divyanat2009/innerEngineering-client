import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';

class UserSignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {    
      loading: false 
    };
  }
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
      state = { error: null };
    
      handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/user-signin')
      };

      handleSubmit = ev => {
        ev.preventDefault();
        const { fullname, username, password } = ev.target;
    
        this.setState({ 
          loading: true,
          error: null });
         AuthApiService.postUser({
           fullname: fullname.value,
           username: username.value,           
           password: password.value,
         })
        .then(user => {
        fullname.value = ''
        username.value = ''        
        password.value = ''
        this.handleRegistrationSuccess()
        this.setState({
          loading: false
        });
        })
          .catch(res => {
            this.setState({ error: res.error})
          });
      }
    render() {  
      const { error } = this.state;    
        return(
            <div>
              <main>
                <Link to={'/user-signin'}>Sign In</Link>
                <form method="post" className="signup-form" onSubmit={this.handleSubmit}>
                <div role='alert'>
                  {error && <p className='red'>{error}</p>}
                </div>  
                <h2>Sign-up to begin your Inner Engineering journey!</h2>
                <label htmlFor="first-name">Full Name</label>
                <input placeholder='Full Name' type="text" name='fullname' id='fullname' required/>               
                <label htmlFor="last-name">UserName</label>
                <input placeholder="UserName" type='text' name='username' id='username' required/>                
                <label htmlFor="password">Password</label>
                <input placeholder="*******" type="password" name='password' id='password' required/>
                <section className='passwordReq'>Password must contain 1 upper case, lower case, number and special character</section>
                <button type="submit">Sign Up</button>                
                </form>
              
              </main>
            </div>

        );
    }
}
export default UserSignUp;