import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import Filter from './Filter';
import employees from './employees';

const App = () => {
  const [filteredDepartment, setFilteredDepartment] = useState('');

  const handleFilterChange = (department) => {
    setFilteredDepartment(department);
  };

  const filteredEmployees =
    filteredDepartment === ''
      ? employees
      : employees.filter((employee) => employee.department === filteredDepartment);

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
};

export default App;
