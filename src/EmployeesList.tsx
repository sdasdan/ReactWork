import React, { Component, useState } from 'react';
import Employee from './Employee';
import {IEmployee} from './models';


interface IEmployeeListState {
    employees: IEmployee[]
}
const EmployeesList: React.FC =  () => {
    const [employees, setEmployees] = useState ([
        {name : 'Suleyman sulo', experience : 2, salary: 0},
        {name : 'John Snow', experience : 20,  salary: 0},
        {name : 'sulo s', experience : 0,  salary: 0}
        ]);
function guiveEmployeesBonus(){
    setEmployees(employees.map(e => ({ ...e, salary: e.salary +1000})));
    }
     
        return <div>
            <ul>
{employees.map(e => (
    <li key={e.name}><Employee employee={e}/></li>
))}
            </ul>
            <button onClick={guiveEmployeesBonus}>guive Bonus</button>
            </div>
            }



export default EmployeesList;