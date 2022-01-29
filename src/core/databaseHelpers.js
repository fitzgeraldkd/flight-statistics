export function processStatistics(rawJsonData) {
  const airlineStats = {};
  const airlineFilterOptions = {
    statistic: new Set(),
    year: new Set(),
    airports: new Set()
  }
  for (const record of rawJsonData) {
    airlineFilterOptions.year.add(record.Time.Year);
    airlineFilterOptions.airports.add(record.Airport.Code);
    airlineStats[record.Time.Year] ||= {};
    airlineStats[record.Time.Year][record.Airport.Code] ||= { rawStatistics: {} };
    airlineStats[record.Time.Year][record.Airport.Code].rawStatistics[record.Time['Month Name']] = record.Statistics
  }
  const statistics = [
    { name: 'flightsOnTime', numeratorKeys: ['Flights', 'On Time'] },
    { name: 'flightsCanceled', numeratorKeys: ['Flights', 'Cancelled'] },
    { name: 'flightsDiverted', numeratorKeys: ['Flights', 'Diverted'] },
    { name: 'flightsDelayed', numeratorKeys: ['Flights', 'Delayed'] },
    { name: 'flightsDelayed-Carrier', numeratorKeys: ['# of Delays', 'Carrier'] },
    { name: 'flightsDelayed-LateAircraft', numeratorKeys: ['# of Delays', 'Late Aircraft'] },
    { name: 'flightsDelayed-Weather', numeratorKeys: ['# of Delays', 'Weather'] },
    { name: 'flightsDelayed-Security', numeratorKeys: ['# of Delays', 'Security'] },
    { name: 'flightsDelayed-ATC', numeratorKeys: ['# of Delays', 'National Aviation System'] }
  ];
  for (const year in airlineStats) {
    for (const airport in airlineStats[year]) {
      airlineStats[year][airport].numberOfFlights = calculateNumberOfFlights(airlineStats[year][airport].rawStatistics)
      for (const statistic of statistics) {
        airlineStats[year][airport][statistic.name] = calculatePercentages(airlineStats[year][airport].rawStatistics, statistic.numeratorKeys)
      }
    }
  }

  return [airlineStats, airlineFilterOptions];
}

export function calculateNumberOfFlights(rawData) {
  const results = {aggregate: 0};
  for (const month in rawData) {
    results.aggregate += rawData[month].Flights.Total;
    results[month] = rawData[month].Flights.Total;
  }
  return results;
}

export function calculatePercentages(rawData, numeratorKeys) {
  const results = {};
  let totalFlights = 0;
  let subtotal = 0;
  for (const month in rawData) {
    let numerator = rawData[month];
    for (const key of numeratorKeys) {
      numerator = numerator[key];
    }
    const flightsThisMonth = rawData[month].Flights.Total;
    subtotal += numerator;
    totalFlights += flightsThisMonth;
    results[month] = (flightsThisMonth === 0) ? '-' : parsePercentage(numerator / flightsThisMonth);
  }
  results.aggregate = (totalFlights === 0) ? '-' : parsePercentage(subtotal / totalFlights);
  return results;
}

function parsePercentage(value, decimals=0) {
  const roundedValue = Math.round(value * (10 ** (2 + decimals))) / (10 ** decimals);
  return roundedValue.toString() + '%';
}
