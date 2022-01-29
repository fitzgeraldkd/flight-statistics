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
