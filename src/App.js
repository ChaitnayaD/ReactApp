
import Navbar from './Navbar';
import SignIn from './SignIn';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import SignUp from './SignUp';


function App() {
  return (
    <Router>
     <div className="App">
       <Navbar/>
        <div className="content">
         <Switch>
         <Route exact path="/">
           <Dashboard/>
         </Route>
         
         <Route exact path="/SignIn">
           <SignIn/>
         </Route>
         
         <Route exact path="/SignUp">
           <SignUp/>
         </Route>

         </Switch>

       </div>
       
    </div>
    </Router>
  );
}

export default App;
