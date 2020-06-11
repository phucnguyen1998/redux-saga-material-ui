import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from './../../actions/modal';


class TaskForm extends Component {
	render() {
		let { classes,modalActionCreators } = this.props; 
		const { hideModal } = modalActionCreators;
		return (
			<form>
				<Grid container spacing={5}>
					<Grid item md={12}>
						<TextField id="standard-basic" label="Tiêu đề" className={classes.textField}/>
					</Grid>
					<Grid item md={12}>
						<TextField
							className={classes.textField}
							id="standard-multiline-flexible"
							label="Mô tả"
							multiline
							rowsMax={4}
						/>
					</Grid>
					<Grid item md={12}>
						<Box display="flex" flexDirection="row-reverse">
							<Button color="primary">
								Lưu Lại
							</Button>
							<Button onClick={hideModal}>
								Hủy
							</Button>
						</Box>
					</Grid>
				</Grid>
			</form>
		);
	}
}

TaskForm.propTypes = {
	classes: PropTypes.object,
	hideModal: PropTypes.func
}

const mapStateToProps = null;
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
	modalActionCreators: bindActionCreators(modalActions, dispatch)
  })
  
const withConnect = connect(mapStateToProps, mapDispatchToProps);
  
export default compose(
	withStyles(styles),
	withConnect
)(TaskForm)
