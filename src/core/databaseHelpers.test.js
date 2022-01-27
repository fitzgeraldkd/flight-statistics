import { calculateNumberOfFlights } from './databaseHelpers';


describe('calculateNumberOfFlights', () => {

  test('adds total when no months passed', () => {
    const rawData = {};
    const results = calculateNumberOfFlights(rawData);
    expect(results.aggregate).toBe(0);
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
    expect(results.January).toBe(9639);
    expect(results.Febuary).toBe(9326);
    expect(results.March).toBe(8801);
    expect(results.aggregate).toBe(27766);
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
    expect(results.January).toBe(1000);
    expect(results.Febuary).toBe(2000);
    expect(results.March).toBe(3000);
    expect(results.April).toBe(4000);
    expect(results.aggregate).toBe(10000);
  });
});