import React from 'react';
import styles from './EventsId.module.scss';
import { useParams } from 'react-router-dom';

const EventsId = () => {
  const {id} = useParams();

  return (
    <div className={styles.component}>
      <h2>EventID view</h2>
      {id}
    </div>
  );
};

export default EventsId;
