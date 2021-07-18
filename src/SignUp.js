const SignUp = () => {
    return (
        <div className="signup">
            <div id="login-box">
  <div className="left">
    <h1 className="heading">Sign Up</h1>
    
    <input type="text" name="name" placeholder="Name" />
    <input type="text" name="email" placeholder="E-mail" />
    <input type="tel" name="phoneno" placeholder="Phone Number" />

    <input type="password" name="password" placeholder="Password" />
    <input type="password" name="password2" placeholder="Confirm Password" />
    
    <input type="submit" name="signup_submit" value="Sign Up" />
  </div>
  
  <div className="right">
    <span className="loginwith">Sign Up with</span>
    
    <button className="social-signin facebook"> Facebook</button>
    <button className="social-signin twitter"> Twitter</button>
    <button className="social-signin google"> Google</button>
  </div>
  <div className="or">OR</div>
</div>
        </div>
      );
}
 
export default SignUp;