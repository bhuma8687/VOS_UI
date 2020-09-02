import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import CreateProductLineComponent from '../src/components/CreateProductLineComponent';
import ListProductLineComponent from '../src/components/ListProductLineComponent';
import ViewProductLineComponent from '../src/components/ViewProductLineComponent';
import LoginComponent from '../src/components/LoginComponent';
import LogoutComponent from '../src/components/LogoutComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>       
            <div className="container">
                <Switch>
                  <Route path="/" exact component={LoginComponent}></Route>
                  <Route path="/producltList"  component={ListProductLineComponent}></Route>
                  <Route path="/add-productLine/:id"  component={CreateProductLineComponent}></Route>
                  <Route path="/view-productLine/:prductLine"  component={ViewProductLineComponent}></Route>
                  <Route path="/logout"  component={LogoutComponent}></Route>
                </Switch>
            </div>         
      </BrowserRouter>      
    </div>
  );
}

export default App;
