import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '#24', order: 'pizza', details: 'standard'},
  {id: 'Tabl2', order: 'salad', details: '-olives, + salami'},
  {id: 'Tabl3', order: 'coffee', details: 'latte'},
  {id: 'Tabl1', order: 'pizza', details: 'sour cream, thin'},
  {id: '#25', order: 'salad', details: '-olives, +feta cheese'},
  {id: '#26', order: 'doughnut', details: ''},
  {id: '#27', order: 'pizza, salad', details: 'pizza: standard, salad: extra olives'},
];

const Kitchen = () => (
  <div className={styles.component}>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#Order / Table</TableCell>
            <TableCell>Orders</TableCell>
            <TableCell>Details</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
              <TableCell>
                {row.details}
              </TableCell>
              <TableCell>
                <Button variant="contained" color="primary" size="small">Set Ready</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Kitchen;
