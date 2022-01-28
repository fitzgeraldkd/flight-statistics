import React from 'react';
import { FormControl, InputLabel, Select } from '@mui/material';

function FilterDropdown({ allowMultiple=false, label, name, value, handleFilterUpdate, children }) {
  return (
    <FormControl variant='standard'>
        <InputLabel id={`${name}-select-label`}>{label}</InputLabel>
        <Select
          labelId={`${name}-select-label`}
          id={`${name}-select`}
          name={name}
          value={value}
          onChange={handleFilterUpdate}
          label={label}
          multiple={allowMultiple}
        >
          {children}
        </Select>
    </FormControl>
  );
}

export default FilterDropdown;
