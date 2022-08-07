import React, { Component } from 'react';
import EmployeeService from '../Service/EmployeeService.js';

export default class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props);

        this.state={
             firstName:'',
             lastName:'',
             emailId:''
        }
      
    }
    cancelEmployee=()=>{
        window.location.href='http://localhost:3000/';
     }
    changeFirstNameHandler=(e)=>{
        return this.setState( {firstName : e.target.value});

    }
    changeLastNameHandler=(e)=>{
        return this.setState( {lastName : e.target.value});

    }
    changeEmailIdNameHandler=(e)=>{
        return this.setState( {emailId : e.target.value});

    }
    createEmployee=(e)=>{
        e.preventDefault();
        let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
        console.log("employee => " + JSON.stringify(employee));
       EmployeeService.createEmployee(employee).then(res=>{
        window.location.href='http://localhost:3000/';
       });
    }

  
     

  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
               <div className="card col-md-6 offset-md-3  offset-md-3 " >
                <h3 className="text-center">Add Employee</h3>  
                <div className="card-body">
               
               
               <form>
                  <div className="form-group">
                  <label>First Name </label><br/>
                  <input placeholder="First-Name" name="firstName" className="form-control" 
                  value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                    </div><br/>
                    <div className="form-group">
                  <label>Last Name </label>
                  <input placeholder="Last-Name" name="lastName" className="form-control" 
                  value={this.state.lastName} onChange={this.changeLastNameHandler} />
                    </div><br/>
                    <div className="form-group">
                  <label>Email Id </label><input placeholder="Email-Id" name="emailId" className="form-control" 
                  value={this.state.emailId} onChange={this.changeEmailIdNameHandler} />
                    </div><br/>
                    

              <button className="btn btn-success " onClick={this.createEmployee}>Save</button>
               </form>
               </div>
               </div>
             
            </div><br></br>
            <div  class="col-md-12 text-center">
            <button className="btn btn-danger "  onClick={()=>{ window.location.href='http://localhost:3000/'}} style={{marginLeft:"10px"}} >Cancel</button>
            </div>


        </div>
      </div>
    )
  }
}
