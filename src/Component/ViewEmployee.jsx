import React, { Component } from 'react';
import EmployeeService from '../Service/EmployeeService';

class ViewEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount=()=>{
        
       EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <div>
                      Employee First Name: &nbsp; <strong>{ this.state.employee.firstName } </strong>
                      
                      </div>
                        </div> <br></br>
                        <div className = "row">
                            <div>
                            Employee Last Name:&nbsp;
                         <strong>  { this.state.employee.lastName } </strong> </div>
                        </div><br></br>
                        <div className = "row"><div>
                           Employee Email ID: &nbsp;
                           <strong>  { this.state.employee.emailId }</strong></div>
                        </div>
                    </div>

                </div>
                <br></br>
            <div  class="col-md-12 text-center">
            <button className="btn btn-danger "  onClick={()=>{ window.location.href='http://localhost:3000/'}} style={{marginLeft:"10px"}} >Cancel</button>
            </div>

            </div>
        )
    }
}

export default ViewEmployee;