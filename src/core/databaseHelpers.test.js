import { calculateNumberOfFlights } from './databaseHelpers';


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