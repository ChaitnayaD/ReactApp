import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        
        <nav className="navbar">
            <div >
                <p data-text="Connekt..." className="head">Connekt...</p>
                <p className="subhead">Connecting People Around  </p>
        </div>
        <Link  to="/">DashBoard</Link>
        <Link  to="/SignUp">Sign Up</Link >
        <Link  to="/SignIn">Sign In</Link >
        
        </nav>
     );
}
 
export default Navbar;