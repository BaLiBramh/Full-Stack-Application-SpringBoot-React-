
import axios from 'axios'; 

const employee_base_API="http://localhost:8080/employee";

class EmployeeService  {
  getEmployee(){
    return axios.get(employee_base_API);
  }
  createEmployee(employee){
    return axios.post(employee_base_API,employee);

  }
  getEmployeeById(employeeId){
    return axios.get(employee_base_API+'/'+employeeId)
  }
  updateEmployee(employee,employeeId){
    return axios.put(employee_base_API+'/'+employeeId,employee);
  }
  deleteEmployee(employeeId){
    return axios.delete(employee_base_API+'/'+employeeId)  }
}

export default  new EmployeeService();


