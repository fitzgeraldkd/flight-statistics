import { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import rawAirlineStats from '../data/airlines.json';
import { processStatistics } from '../core/databaseHelpers';
import Header from './Header';
import FilterForm from './FilterForm';
import Results from './Results';

function App() {
  const [airlineStats, setAirlineStats] = useState();
  const [filters, setFilters] = useState({
    statistic: 'numberOfFlights',
    year: '2008',
    airports: []
  });
  const [filterOptions, setFilterOptions] = useState();

  useEffect(() => {
    const [processedAirlineStats, airlineFilterOptions] = processStatistics(rawAirlineStats);
    setAirlineStats(processedAirlineStats);
    setFilterOptions(airlineFilterOptions);
  }, []);

  const handleFilterUpdate = (e) => {
    setFilters(currentFilters => ({ ...currentFilters, [e.target.name]: e.target.value }));
  };

  const filteredStats = [...filters.airports].sort().map(airport => ({
    airport,
    statistics: airlineStats[filters.year][airport][filters.statistic]
  }));
  
  return (
    <Box>
      <Header />
      <Container sx={{ mt: 4 }}>
        {(!airlineStats || !filterOptions) ? 
          <Typography>
            Loading flight statistics...
          </Typography> :
          <>
            <FilterForm filters={filters} handleFilterUpdate={handleFilterUpdate} filterOptions={filterOptions} />
            <Results records={filteredStats} aggregateName={filters.statistic === 'numberOfFlights' ? 'Total' : 'Mean'}/>
          </>
        }
      </Container>
    </Box>
  );
}

export default App;
