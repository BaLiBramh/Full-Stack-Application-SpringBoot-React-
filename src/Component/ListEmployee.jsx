import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService.js';



class ListEmployee extends Component {
    constructor(props){
        super(props);

        this.state={
            employee:[ ]
        }
        

    } 
    viewEmployee=(id)=>{
      window.location.href=`/view-employee/${id}`;

    }
    deleteEmployee=(id)=>{
  
      EmployeeService.deleteEmployee(id).then(res=>{
         this.setState({employee:this.state.employee.filter(employee=>employee.id !==id)});
      });

    }
    
    componentDidMount(){
        EmployeeService.getEmployee().then((res)=>{
         this.setState({employee:res.data});
        });
    } 
   
    addEmployee=()=>{
      window.location.href='/add-employee';
       
       }
       editEmployee=(id)=>{
        window.location.href=`/update-employee/${id}`;
       }
 
  render() {
    return (

        <div>
        <h2 className="text-center">Employee List</h2>
                 
                  <Link className="btn btn-primary" onClick={event =>  window.location.href='/add-employee'}>Add Employee</Link>
                     
        <div  className="row">
            <table className="table table-striped table-bordered">
            <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Action</th>
          </tr>

            </thead>
            <tbody>

                 
          
            {
             this.state.employee.map(
                (employee)=>
                <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                    <td>
                      <button  onClick={()=>this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                      <button style={{marginLeft:"10px"}} onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                      <button style={{marginLeft:"10px"}} onClick={()=>this.viewEmployee(employee.id)} className="btn btn-primary">View</button>
                    </td>
                </tr>
             )

            }
  </tbody>
            </table>


        </div>

        </div>

      
    )
  }
}
export default ListEmployee;
