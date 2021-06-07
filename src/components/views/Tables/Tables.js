import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/booked/123abc`} activeClassName='active'>Booking ID</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/event/123abc`} activeClassName='active'>Event ID</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New Event</Link>
    <h2>Tables view</h2>
  </div>
);

export default Tables;
