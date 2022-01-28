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
    if (record.Time.Year in airlineStats) {
      if (record.Airport.Code in airlineStats[record.Time.Year]) {
        airlineStats[record.Time.Year][record.Airport.Code][record.Time['Month Name']] = record.Statistics;
      } else {
        airlineStats[record.Time.Year][record.Airport.Code] = {
          [record.Time['Month Name']]: record.Statistics
        };
      }
    } else {
      airlineStats[record.Time.Year] = {
        [record.Airport.Code]: {
          [record.Time['Month Name']]: record.Statistics
        }
      };
    }
  }
  console.log(airlineFilterOptions);
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