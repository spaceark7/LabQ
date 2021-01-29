import React, { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import MobileNav from './components/MobileNav';
import SignIn from './components/SignIn'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProdukList from './components/ProdukList'
import Login from './components/Login'
import Verification from './components/Verification'
import { AuthProvider } from './context/AuthContext';
function App() {
  const [register, setRegister] = useState()


  return (
    
      <div className="App">
        <Router>
       
          <Switch>
             
              <Route exact path="/" component={MainPage}/>
              <Route path="/Produk" component={ProdukList} /> 
              <AuthProvider>
              <Route path="/signIn" component={SignIn} />
              <Route path="/Verification" component={Verification} />
             
              <Route path="/Login" component={Login} />
              </AuthProvider>

              
          </Switch>
          
        </Router>
      </div>
    
  );
}

export default App;
