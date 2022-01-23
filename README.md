# Flight Statistics

## Running

To run the app, clone this repository to your local computer then navigate to the root directory in your terminal. Then run the following commands:

```bash
npm install
npm run
```

By default the application will run on `localhost:3000`, but if that port is already occupied it will use the next-available port. It should open automatically in your default browser once the server is running.

## File Structure

I created three directories to organize the files:

- `/components` holds all of the React components.
- `/data` holds the JSON file that is imported into the application.
- `/utils` holds any helper functions that can be reused throughout the application.

## The Data

To make rendering the data more efficient, I have a helper function in `/utils/databaseHelpers.js` that reads the original data from the JSON file and structures it into a more accessible nested object. Doing this once when the application first loads should save time rendering the results since we can grab just the airports we want for the given year instead of filtering through the entire JSON file again.

I plan on adding additional helper functions to help with rendering the table, such as:

- A function to calculate the total and average for the given year and airport
- A function to calculate the percentages and return the rounded number to display in the table

## To-Do

- Finish the `FilterForm` component. Currently all of the requested options are displayed in the drop down menus. The airports dropdown does not yet display which options have been selected.
- Render a table with the results based on the applied filters. The data stored in state has already been stored with this task in mind.
- Refactor the helper function in `databaseHelper.js`. It works fine as is but has nested `for` loops that could be cleaned up to be more readable.
- Write tests, especially for the helper functions parsing the data and calculating averages.