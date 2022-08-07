
import './App.css';
import React from 'react';
import FooterComponent from './Component/FooterComponent';
import HeaderComponent from './Component/HeaderComponent';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateEmployeeComponent from './Component/CreateEmployeeComponent';
import ListEmployee from './Component/ListEmployee';
import UpdateEmployee from './Component/UpdateEmployee';
import ViewEmployee from './Component/ViewEmployee';


const App =()=> {
  return (
    <div>
      <Router>
        
            <HeaderComponent />
            <div className='container'>
              <withRouter>
              <Switch>
                <Route path="/" exact component= { ListEmployee } ></Route>
                <Route path="/employee" component= {ListEmployee} ></Route>
                <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                <Route path="/update-employee/:id" component={UpdateEmployee}></Route>
                <Route path="/view-employee/:id" component={ViewEmployee}></Route>
                
              </Switch></withRouter>
                 
            </div>

                    
            <FooterComponent /> 
              </Router>  
              
    </div>
   
  );
}

export default App;
