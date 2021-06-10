import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {hour: '12:00', status: 'free'},
  {hour: '12:30', status: 'booked'},
  {hour: '13:00', status: 'booked'},
  {hour: '13:30', status: 'free'},
  {hour: '14:00', status: 'booked'},
  {hour: '14:30', status: 'booked'},
  {hour: '15:00', status: 'free'},
  {hour: '15:30', status: 'free'},
  {hour: '16:00', status: 'event'},
  {hour: '16:30', status: 'free'},
  {hour: '17:00', status: 'free'},
  {hour: '17:30', status: 'free'},
  {hour: '18:00', status: 'event'},
  {hour: '18:30', status: 'free'},
  {hour: '19:00', status: 'event'},
  {hour: '19:30', status: 'free'},
  {hour: '20:00', status: 'free'},
  {hour: '20:30', status: 'free'},
  {hour: '21:00', status: 'free'},
  {hour: '21:30', status: 'event'},
  {hour: '22:00', status: 'free'},
  {hour: '22:30', status: 'booked'},
  {hour: '23:00', status: 'free'},
  {hour: '23:30', status: 'free'},
];

const demoContent2 = [
  {hour: '12:00', status: 'free'},
  {hour: '12:30', status: 'free'},
  {hour: '13:00', status: 'free'},
  {hour: '13:30', status: 'free'},
  {hour: '14:00', status: 'free'},
  {hour: '14:30', status: 'free'},
  {hour: '15:00', status: 'free'},
  {hour: '15:30', status: 'free'},
  {hour: '16:00', status: 'event'},
  {hour: '16:30', status: 'free'},
  {hour: '17:00', status: 'free'},
  {hour: '17:30', status: 'free'},
  {hour: '18:00', status: 'event'},
  {hour: '18:30', status: 'free'},
  {hour: '19:00', status: 'event'},
  {hour: '19:30', status: 'free'},
  {hour: '20:00', status: 'free'},
  {hour: '20:30', status: 'free'},
  {hour: '21:00', status: 'free'},
  {hour: '21:30', status: 'event'},
  {hour: '22:00', status: 'free'},
  {hour: '22:30', status: 'booked'},
  {hour: '23:00', status: 'free'},
  {hour: '23:30', status: 'free'},
];

const demoContent3 = [
  {hour: '12:00', status: 'event'},
  {hour: '12:30', status: 'event'},
  {hour: '13:00', status: 'event'},
  {hour: '13:30', status: 'event'},
  {hour: '14:00', status: 'free'},
  {hour: '14:30', status: 'free'},
  {hour: '15:00', status: 'free'},
  {hour: '15:30', status: 'free'},
  {hour: '16:00', status: 'event'},
  {hour: '16:30', status: 'free'},
  {hour: '17:00', status: 'free'},
  {hour: '17:30', status: 'free'},
  {hour: '18:00', status: 'event'},
  {hour: '18:30', status: 'free'},
  {hour: '19:00', status: 'event'},
  {hour: '19:30', status: 'free'},
  {hour: '20:00', status: 'free'},
  {hour: '20:30', status: 'free'},
  {hour: '21:00', status: 'free'},
  {hour: '21:30', status: 'event'},
  {hour: '22:00', status: 'free'},
  {hour: '22:30', status: 'booked'},
  {hour: '23:00', status: 'free'},
  {hour: '23:30', status: 'free'},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <ButtonGroup variant="contained" color="primary" size="small" aria-label="contained primary button group">
            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Booking</Button>
            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New Event</Button>
          </ButtonGroup>
        </>
      );
    case 'booked':
      return (
        <Button variant="contained" color="primary" size="small" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/booked/123abc`} activeClassName='active'>Booking ID</Button>
      );
    case 'event':
      return (
        <Button variant="contained" color="primary" size="small" component={Link} to={`${process.env.PUBLIC_URL}/tables/events/event/123abc`} activeClassName='active'>Event ID</Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <form className={styles.container} noValidate>
      <form className={styles.container} noValidate>
        <TextField
          id="datetime-local"
          label="Select Date / Time"
          type="datetime-local"
          defaultValue="2021-06-10T19:30"
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </form>

    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>T1 Options</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>T2 Options</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>T3 Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map((row, index) => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
              <TableCell>
                {demoContent2[index].status}
              </TableCell>
              <TableCell>
                {renderActions(demoContent2[index].status)}
              </TableCell>
              <TableCell>
                {demoContent3[index].status}
              </TableCell>
              <TableCell>
                {renderActions(demoContent3[index].status)}
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </Paper>
  </div>
);



export default Tables;
