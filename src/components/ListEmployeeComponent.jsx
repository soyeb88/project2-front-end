import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from "react-router-dom";



class ListEmployeeComponent extends Component {
   
    constructor(props){
        super(props)


        this.state ={
            employees:[]
        }

        //this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    
    componentDidMount(){
        EmployeeService.getEmployees().then(
            (res) => this.setState({employees: res.data})
        );
        
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        })
        console.log(id);
    }

    

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={() => {
                         this.props.navHook('/add-update-employee/-1')
                     }}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employer First Name</th>
                                <th>Employer Last Name</th>
                                <th>Employer Email Address</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button onClick={() => { this.props.navHook(`/add-update-employee/${employee.id}`)
                                                }} className="btn btn-info">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={()=>this.deleteEmployee(employee.id)} 
                                                className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft:"10px"}} onClick={() => { this.props.navHook(`/view-employee/${employee.id}`)
                                                }} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

function myParams(Component) {
    return props => <Component navHook={useNavigate()} />;
}
  
export default myParams(ListEmployeeComponent);
