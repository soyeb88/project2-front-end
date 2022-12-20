import axios from 'axios'

const EMPLOYEE_API_BASE_URL="http://localhost:8090/api/v1/employees";

class EmployeeSevice{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }
}

export default new EmployeeSevice();