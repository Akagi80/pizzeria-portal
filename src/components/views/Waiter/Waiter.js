import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.any,
    fetchChangeStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(status) {
    switch (status) {
      case 'free':
        return (
          <>
            <ButtonGroup variant="contained" color="primary" size="small" aria-label="contained primary button group">
              <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/orders/order/123abc`} activeClassName='active'>Order ID</Button>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/orders/new`} activeClassName='active'>New Order</Button>
            </ButtonGroup>
          </>
        );
      case 'thinking':
        return (
          <ButtonGroup variant="contained" color="primary" size="small" aria-label="contained primary button group">
            <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/orders/new`} activeClassName='active'>New Order</Button>
          </ButtonGroup>
        );
      case 'ordered':
        return (
          <ButtonGroup variant="contained" color="primary" size="small" aria-label="contained primary button group">
            <Button>prepared</Button>
          </ButtonGroup>
        );
      case 'prepared':
        return (
          <ButtonGroup variant="contained" color="primary" size="small" aria-label="contained primary button group">
            <Button>delivered</Button>
          </ButtonGroup>
        );
      case 'delivered':
        return (
          <ButtonGroup variant="contained" color="primary" size="small" aria-label="contained primary button group">
            <Button>paid</Button>
          </ButtonGroup>
        );
      case 'paid':
        return (
          <ButtonGroup variant="contained" color="primary" size="small" aria-label="contained primary button group">
            <Button >free</Button>
          </ButtonGroup>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
