import React, { Component } from 'react';
import styles from './style';
import { withStyles, TextField } from '@material-ui/core';
import PropsTypes from 'prop-types';

class SearchBox extends Component {

  render() {
    const {classes,handleChange} = this.props;
    return (
      <form className={classes.form} noValidate autoComplete="off">
        <TextField 
          autoComplete="off"
          id="standard-basic" 
          onChange={handleChange} 
          className={classes.textField}
          placeholder="Nhập nội dung"
        />
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropsTypes.object,
  handleChange: PropsTypes.func
}

export default withStyles(styles)(SearchBox);