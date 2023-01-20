import React, { Component } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            id: this.props.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEamilIdHandler = this.changeEamilIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);

        if(this.state.id === "-1"){
            return 
        }else{
            EmployeeService.getEmployeeById(this.state.id).then((res)=>{
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
    
                })
            });
        }

    }

    saveEmployee = (event) => {
        event.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee =>' + JSON.stringify(employee));
        
        //validate(employee);

        if(this.state.id === "-1"){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.navigate('/employee');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then(res=>{
                this.props.navigate('/employee');
           });
        }
    }

    /*
    //https://www.google.com/search?q=how+to+validate+in+react+js&sxsrf=AJOqlzX-P61MnOBMPPUcgpily_2zw4HvKw:1673824889983&source=lnms&tbm=vid&sa=X&ved=2ahUKEwiH8O7P28r8AhXyUjUKHem7CAwQ_AUoAXoECAEQAw&biw=1440&bih=605&dpr=1#fpstate=ive&vld=cid:04abcb9e,vid:EYpdEYK25Dc
    validate(employee){
        const errors = {};
        return
    }
    */

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEamilIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    changeTitle(){
        if(this.state.id === "-1"){
            return <h3 className="text-center">Add Employee</h3>
        }
        else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() {          
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.changeTitle()}
                            <div className="card-body">
                                <form onSubmit={this.saveEmployee}>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="emailId" className="form-control" 
                                        value={this.state.emailId} onChange={this.changeEamilIdHandler} required/>                                 
                                    </div>

                                    <button className="btn btn-success">Save</button>
                                    <button className="btn btn-danger" onClick={() => {
                                        this.props.navigate('/employee')}} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const myParams = (WrappedComponent) => (props) => {
    const params = useParams();
    const navigate = useNavigate();
    return <WrappedComponent {...props} params={params} navigate={navigate} />;
}

export default myParams(CreateEmployeeComponent);