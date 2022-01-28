import React from 'react';
import { Box, MenuItem } from '@mui/material';
import FilterDropdown from './FilterDropdown';

function FilterForm({ filters, filterOptions, handleFilterUpdate }) {
  const renderSelectOptions = (filter) => (
    Array.from(filterOptions[filter]).map(option => (
      <MenuItem key={option} value={option}>{option}</MenuItem>
    ))
  );

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'baseline',
      '& .MuiFormControl-root': {
        m: 1,
        minWidth: 120
      }
    }}>
      Show 

      <FilterDropdown label='Statistic' name='statistic' value={filters.statistic} handleFilterUpdate={handleFilterUpdate}>
        <MenuItem value='numberOfFlights'>Number Of Flights</MenuItem>
        <MenuItem value='flightsOnTime'>% of Flights On Time</MenuItem>
        <MenuItem value='flightsCanceled'>% of Flights Canceled</MenuItem>
        <MenuItem value='flightsDiverted'>% of Flights Diverted</MenuItem>
        <MenuItem value='flightsDelayed'>% of Flights Delayed</MenuItem>
        <MenuItem value='flightsDelayed-Carrier'>% of Flights Delayed (Carrier)</MenuItem>
        <MenuItem value='flightsDelayed-LateAircraft'>% of Flights Delayed (Late Aircraft)</MenuItem>
        <MenuItem value='flightsDelayed-Weather'>% of Flights Delayed (Weather)</MenuItem>
        <MenuItem value='flightsDelayed-Security'>% of Flights Delayed (Security)</MenuItem>
        <MenuItem value='flightsDelayed-ATC'>% of Flights Delayed (Air Traffic Control)</MenuItem>
      </FilterDropdown>

      for 

      <FilterDropdown label='Year' name='year' value={filters.year} handleFilterUpdate={handleFilterUpdate}>
        {renderSelectOptions('year')}
      </FilterDropdown>

      at 

      <FilterDropdown label='Airports' name='airports' value={filters.airports} handleFilterUpdate={handleFilterUpdate} allowMultiple>
        {renderSelectOptions('airports')}
      </FilterDropdown>
    </Box>
  );
}

export default FilterForm;
