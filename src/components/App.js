import { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import rawAirlineStats from '../data/airlines.json';
import { processStatistics } from '../utils/databaseHelpers';
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

  if (!airlineStats || !filterOptions) {
    return (
      <Box>
        <Header />
        <Container sx={{ mt: 4 }}>
          <Typography>
            Loading flight statistics...
          </Typography>
        </Container>
      </Box>
    );
  }
  
  return (
    <Box>
      <Header />
      <Container sx={{ mt: 4 }}>
        <FilterForm filters={filters} handleFilterUpdate={handleFilterUpdate} filterOptions={filterOptions} />
        <Results />
      </Container>
    </Box>
  );
}

export default App;
