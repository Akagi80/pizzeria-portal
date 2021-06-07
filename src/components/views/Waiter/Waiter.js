import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/waiter/orders/new`} activeClassName='active'>New Order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/orders/order/123abc`} activeClassName='active'>Order ID</Link>
    <h2>Waiter view</h2>
  </div>
);

export default Waiter;
