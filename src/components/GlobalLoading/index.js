import React, { Component } from 'react';
import styles from './style';
import { withStyles } from '@material-ui/styles';
import loadingIcon from './../../assets/images/2.gif';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators,compose } from 'redux';
import * as uiAction from './../../actions/UI';

class GlobalLoading extends Component {

  render() {
    const {classes,showLoading} = this.props;
    let xhtml = null;

    if(showLoading){
      xhtml = (<div className={classes.globalLoading}>
                <img src={loadingIcon} alt={'loading'} className={classes.icon}/>
              </div>)
    }
    return xhtml;
    
  }
}

GlobalLoading.propsTypes = {
  classes : PropsTypes.object,
  showLoading: PropsTypes.bool
}

const mapStateToProps = (state, ownProps) => {
  return {
    showLoading: state.ui.showLoading
  }
}


const withConnect = connect(mapStateToProps, null)

export default compose(
  withStyles(styles),
  withConnect
)(GlobalLoading);