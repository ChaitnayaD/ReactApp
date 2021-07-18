const SignIn = () => {
    return (
      <div className="signin">
      <div id="login-box1">
<div className="left">
<h1 className="heading">Sign In</h1>

<input type="text" name="email" placeholder="E-mail" />


<input type="password" name="password" placeholder="Password" />


<input type="submit" name="signup_submit" value="Sign In" />
</div>
<div className="right">
    <span className="loginwith">Sign In with</span>
    
    <button className="social-signin facebook"> Facebook</button>
    <button className="social-signin twitter"> Twitter</button>
    <button className="social-signin google"> Google</button>
  </div>
  <div className="or">OR</div>
</div>
</div>
      );
}
 
export default SignIn;