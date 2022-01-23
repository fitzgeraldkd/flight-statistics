import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Input } from '@mui/material';

function FilterForm({ filters, filterOptions, handleFilterUpdate }) {
  console.log(filters);
  const renderSelectOptions = (filter) => {
    const options = Array.from(filterOptions[filter]);
    console.log(options);
    const optionElements = [];
    for (const option of options) {
      optionElements.push(
        <MenuItem value={option}>{option}</MenuItem>
      );
    }
    return optionElements;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline'}}>
      Show 
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='statistic-select-label'>Statistic</InputLabel>
        <Select
          labelId='statistic-select-label'
          id='statistic-select'
          name='statistic'
          value={filters.statistic}
          onChange={handleFilterUpdate}
          label='Statistic'
        >
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
        </Select>
      </FormControl>
      for 
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='year-select-label'>Year</InputLabel>
        <Select
          labelId='year-select-label'
          id='year-select'
          name='year'
          value={filters.year}
          onChange={handleFilterUpdate}
          label='Year'
        >
          {renderSelectOptions('year')}
        </Select>
      </FormControl>
      at 
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='airport-select-label'>Airports</InputLabel>
        <Select
          labelId='airport-select-label'
          id='airport-select'
          name='airport'
          multiple
          value={filters.airports}
          onChange={handleFilterUpdate}
          input={<Input label='Airports' />}
        >
          {renderSelectOptions('airports')}
        </Select>
      </FormControl>


    </Box>
  );
}

export default FilterForm;
