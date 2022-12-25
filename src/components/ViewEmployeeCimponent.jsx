import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useParams } from "react-router-dom";

class ViewEmployeeCimponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            id: this.props.params.id,
            employees:{}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            this.setState({employees: res.data})
        });
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label>Emoployee First Name: </label>
                            <div>{this.state.employees.firstName}</div>
                        </div>
                        <div className='row'>
                            <label>Emoployee Last Name: </label>
                            <div>{this.state.employees.lastName}</div>
                        </div>

                        <div className='row'>
                            <label>Emoployee Email Address: </label>
                            <div>{this.state.employees.emailId}</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


function myParams(Component) {
    return props => <Component params={useParams()} />;
}
  

export default myParams(ViewEmployeeCimponent);