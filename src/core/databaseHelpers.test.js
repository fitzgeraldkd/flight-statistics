import { calculateNumberOfFlights, calculatePercentages } from './databaseHelpers';


describe('calculateNumberOfFlights', () => {

  test('adds total when no months passed', () => {
    const rawData = {};
    const results = calculateNumberOfFlights(rawData);
    const expectedResults = {
      aggregate: 0
    };
    expect(results).toStrictEqual(expectedResults);
  });

  test('adds total with three months', () => {
    const rawData = {
      "January": {
        "Flights": {
          "Total": 9639
        }
      },
      "Febuary": {
        "Flights": {
          "Total": 9326
        }
      },
      "March": {
        "Flights": {
          "Total": 8801
        }
      }
    };
    const results = calculateNumberOfFlights(rawData);
    const expectedResults = {
      January: 9639,
      Febuary: 9326,
      March: 8801,
      aggregate: 27766
    };
    expect(results).toStrictEqual(expectedResults);
  });

  test('adds total with four months', () => {
    const rawData = {
      "January": {
        "Flights": {
          "Total": 1000
        }
      },
      "Febuary": {
        "Flights": {
          "Total": 2000
        }
      },
      "March": {
        "Flights": {
          "Total": 3000
        }
      },
      "April": {
        "Flights": {
          "Total": 4000
        }
      }
    };
    const results = calculateNumberOfFlights(rawData);
    const expectedResults = {
      January: 1000,
      Febuary: 2000,
      March: 3000,
      April: 4000,
      aggregate: 10000
    };
    expect(results).toStrictEqual(expectedResults);
  });

  test('adds total with twelve months', () => {
    const rawData = {
      "January": {
        "Flights": {
          "Total": 1000
        }
      },
      "Febuary": {
        "Flights": {
          "Total": 2000
        }
      },
      "March": {
        "Flights": {
          "Total": 3000
        }
      },
      "April": {
        "Flights": {
          "Total": 4000
        }
      },
      "May": {
        "Flights": {
          "Total": 5000
        }
      },
      "June": {
        "Flights": {
          "Total": 6000
        }
      },
      "July": {
        "Flights": {
          "Total": 7000
        }
      },
      "August": {
        "Flights": {
          "Total": 8000
        }
      },
      "September": {
        "Flights": {
          "Total": 9000
        }
      },
      "October": {
        "Flights": {
          "Total": 10000
        }
      },
      "November": {
        "Flights": {
          "Total": 11000
        }
      },
      "December": {
        "Flights": {
          "Total": 12000
        }
      }
    };
    const results = calculateNumberOfFlights(rawData);
    const expectedResults = {
      January: 1000,
      Febuary: 2000,
      March: 3000,
      April: 4000,
      May: 5000,
      June: 6000,
      July: 7000,
      August: 8000,
      September: 9000,
      October: 10000,
      November: 11000,
      December: 12000,
      aggregate: 78000
    };
    expect(results).toStrictEqual(expectedResults);
  });
});

describe('calculatePercentages', () => {
  test('calculates percentages when no months passed', () => {
    const rawData = {};
    const results = calculatePercentages(rawData);
    const expectedResults = {
      aggregate: '-'
    };
    expect(results).toStrictEqual(expectedResults);
  });

  test('calculates percentages with one month for Flights On Time', () => {
    const rawData = {
      "January": {
        "Flights": {
          "On Time": 4000,
          "Total": 10000
        }
      }
    };
    const results = calculatePercentages(rawData, ['Flights', 'On Time']);
    const expectedResults = {
        January: '40%',
        aggregate: '40%'
    };
    expect(results).toStrictEqual(expectedResults);
  });

  test('calculates percentages with one month for Flights On Time when quantity is zero', () => {
    const rawData = {
      "January": {
        "Flights": {
          "On Time": 0,
          "Total": 0
        }
      }
    };
    const results = calculatePercentages(rawData, ['Flights', 'On Time']);
    const expectedResults = {
      January: '-',
      aggregate: '-'
    };
    expect(results).toStrictEqual(expectedResults);
  });

  test('calculates percentages with three months for Flights On Time', () => {
    const rawData = {
      "January": {
        "Flights": {
          "On Time": 10000,
          "Total": 10000
        }
      },
      "February": {
        "Flights": {
          "On Time": 0,
          "Total": 20000
        }
      },
      "March": {
        "Flights": {
          "On Time": 15000,
          "Total": 30000
        }
      }
    };
    const results = calculatePercentages(rawData, ['Flights', 'On Time']);
    const expectedResults = {
        January: '100%',
        February: '0%',
        March: '50%',
        aggregate: '42%'
    };
    expect(results).toStrictEqual(expectedResults);
  });

  test('calculates percentages with three months for Flights Delayed due to Weather', () => {
    const rawData = {
      "January": {
        "# of Delays": {
          "Weather": 3000
        },
        "Flights": {
          "Total": 10000
        }
      },
      "February": {
        "# of Delays": {
          "Weather": 5000
        },
        "Flights": {
          "Total": 20000
        }
      },
      "March": {
        "# of Delays": {
          "Weather": 4000
        },
        "Flights": {
          "Total": 30000
        }
      }
    };
    const results = calculatePercentages(rawData, ['# of Delays', 'Weather']);
    const expectedResults = {
        January: '30%',
        February: '25%',
        March: '13%',
        aggregate: '20%'
    };
    expect(results).toStrictEqual(expectedResults);
  });
});
