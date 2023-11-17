import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <div>
      <h3>Filter by Department:</h3>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
        {/* Add more departments as needed */}
      </select>
    </div>
  );
};

export default Filter;
