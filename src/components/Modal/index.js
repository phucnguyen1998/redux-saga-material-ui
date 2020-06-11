import React, { Component } from 'react';
import { withStyles,Modal } from '@material-ui/core';
import styles from './style';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from './../../actions/modal';

class commonModal extends Component {
  render() {
    const {classes, open, component, modalActionCreators, title} = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <Modal open={open} onClose={hideModal}>
				<div className={classes.modal}>
					<div className={classes.header}>
						<span className={classes.title}>
							{title}
						</span>
						<CloseIcon onClick={hideModal} className={classes.icon}/>
					</div>
					<div className={classes.content}>
            {component}
          </div>
				</div>
			</Modal>
    )
  }
}

// commonModal.PropTypes = {
//   // classes: PropTypes.object,
//   // title: PropTypes.string,
//   // open: PropTypes.bool,
//   // modalActionCreators: PropTypes.shape({
//   //   hideModal: PropTypes.func,
//   // }),
//   // component: PropTypes.object
// }

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch)
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withStyles(styles),
  withConnect
)(commonModal);