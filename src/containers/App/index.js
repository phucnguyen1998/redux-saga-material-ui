import React, { Component } from 'react';
import styles from './style';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from '../TaskBoard';
import theme from '../../commons/Theme';
import { Provider } from 'react-redux';
import configStore from './../../redux/configStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';

const store = configStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer/>
          <GlobalLoading/>
          <TaskBoard/>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
