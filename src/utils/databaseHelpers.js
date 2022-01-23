export function processStatistics(rawJsonData) {
  const airlineStats = {};
  for (const record of rawJsonData) {
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
  return airlineStats;
}