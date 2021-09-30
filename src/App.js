
import './App.css';
import Header from './Components/Header/Header';

import Shirts from './Components/Shirts/Shirts';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Components/Details/Details';

import Offer from './Components/Offer/Offer';
import Footer from './Components/Footer/Footer';
import Login from './Login/Login';
import Signup from './Components/Signup/Signup'





function App() {
  return (

    <div className="App" >

      <Offer></Offer>
      <Router>
        <Header></Header>

        <Switch>
         <Route exact path="/">
           <Shirts></Shirts>

         </Route>
          <Route path="/home">
            <Shirts></Shirts>

          </Route>
          <Route path="/Shirt/:ShirtId">
            <Details></Details>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/signup">
          <Signup></Signup>
          </Route>
        
        </Switch>
        <Footer></Footer>
      </Router>


    </div>


  );
}

export default App;
