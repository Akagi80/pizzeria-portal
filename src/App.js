import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from '../src/components/views/Dashboard/Dashboard';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/WaiterContainer';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import BookingId from '../src/components/views/BookingId/BookingId';
import BookingNew from '../src/components/views/BookingNew/BookingNew';
import EventsId from '../src/components/views/EventsId/EventsId';
import EventsNew from '../src/components/views/EventsNew/EventsNew';
import OrderId from '../src/components/views/OrderId/OrderId';
import OrderNew from '../src/components/views/OrderNew/OrderNew';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    //secondary: { main: 'l1cb5f' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/booked/:id'} component={BookingId} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={BookingNew} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/event/:id'} component={EventsId} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={EventsNew} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/orders/order/:id'} component={OrderId} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/orders/new'} component={OrderNew} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
