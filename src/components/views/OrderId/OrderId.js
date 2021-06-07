import React from 'react';
import { useParams } from 'react-router';
import styles from './OrderId.module.scss';

const OrderId = () => {
  const {id} = useParams();

  return (
    <div className={styles.component}>
      <h2>OrderID view</h2>
      {id}
    </div>
  );
};

export default OrderId;
