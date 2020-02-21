import React, { Component } from 'react';
import {IEmployee} from './models'

interface IEmployeeProps {
    employee: IEmployee
}

const Employee: React.FC<IEmployeeProps> = ({employee}) => {
    return(
        <>
        <span>{employee.name}</span>
        <span> - </span>
        <span>{employee.experience}</span>
        <span> - </span>
        <span>{employee.salary} $</span>
        </>
    )
} 

export default Employee;