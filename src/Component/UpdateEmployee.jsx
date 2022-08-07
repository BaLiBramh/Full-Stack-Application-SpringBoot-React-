import React, { Component } from 'react';
import EmployeeService from '../Service/EmployeeService';

 class UpdateEmployee extends Component {
    constructor(props){
        super(props);

        this.state={
            id:this.props.match.params.id,
             firstName:'',
             lastName:'',
             emailId:''
        }
       
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
    updateEmployee=(e)=>{
        e.preventDefault();
        let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
        console.log("employee => " + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then(res=>{
            window.location.href='http://localhost:3000/';
        });
      
    }

    cancelEmployee=()=>{
        window.location.href='/';
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee=res.data;
            this.setState({firstName:employee.firstName,lastName:employee.lastName,emailId:employee.emailId});
        });   
    }

  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
               <div className="card col-md-6 offset-md-3  offset-md-3 " >
                <h3 className="text-center">Update Employee</h3>  
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
                    

              <button className="btn btn-success " onClick={this.updateEmployee}>Update</button>

                 </form>
               </div>
               </div>

            </div>
            <br></br>
            <div  class="col-md-12 text-center">
            <button className="btn btn-danger "  onClick={()=>{ window.location.href='http://localhost:3000/'}} style={{marginLeft:"10px"}} >Cancel</button>
            </div>



        </div>
      </div>
    )
  }
}
export default UpdateEmployee;
