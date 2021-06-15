import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, fetchChangeStatusAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  fetchTablesStatus: (id, status) => dispatch(fetchChangeStatusAPI(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);