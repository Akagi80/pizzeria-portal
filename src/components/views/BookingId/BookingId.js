import React from 'react';
import styles from './BookingId.module.scss';
import { useParams } from 'react-router-dom';

const BookingId = () => {
  const {id} = useParams();

  return (
    <div className={styles.component}>
      <h2>BookingID view</h2>
      {id}
    </div>
  );
};

export default BookingId;
