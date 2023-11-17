import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ol>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.department} -{employee.contact}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default EmployeeList;


