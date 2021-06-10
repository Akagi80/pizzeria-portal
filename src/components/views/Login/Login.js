import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Login = () => (
  <div className={styles.component}>
    <div className={styles.log}>
      <TextField
        className={styles.input}
        required
        id="outlined-required"
        label="Login"
        variant="outlined"
      />
      <TextField
        className={styles.input}
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        variant="outlined"
      />
      <div className={styles.button}>
        <Button variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>LOGIN</Button>
      </div>
    </div>
  </div>
);

export default Login;
