import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './style';

class TaskBoard extends Component {
  render() {
    const {classes} = this.props;
    return (
        <div className={classes.taskboard}>
          <div className={classes.shape}>ReactJs</div>
          <div className={classes.shape}>ReactJs</div>
          <div className={classes.shape}>ReactJs</div>
        </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);