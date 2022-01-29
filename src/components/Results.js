import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function Results({ records, aggregateName }) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fullMonths = {
    Jan: 'January',
    Feb: 'Febuary',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December'
  };
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {months.map(month => (
                <TableCell key={month}>{month}</TableCell>
              ))}
              <TableCell>{aggregateName}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.length === 0 && (
              <TableRow>
                <TableCell colSpan={14}>No airports selected</TableCell>
              </TableRow>
            )}
            {records.map(record => (
              <TableRow key={record.airport}>
                <TableCell>{record.airport}</TableCell>
                {months.map(month => (
                  <TableCell key={month}>
                    {record.statistics[fullMonths[month]] || '-'}
                  </TableCell>
                ))}
                <TableCell>{record.statistics.aggregate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Results;
