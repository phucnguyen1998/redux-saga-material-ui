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
import { Field, reduxForm } from 'redux-form';


class TaskForm extends Component {

	handleSubmitForm = (data) => {
		console.log('data', data);
	}

	render() {
		let { classes,modalActionCreators,handleSubmit } = this.props; 
		const { hideModal } = modalActionCreators;
		return (
			<form onSubmit = {handleSubmit(this.handleSubmitForm)}>
				<Grid container spacing={5}>
					<Grid item md={12}>
						<Field
							name= "title"
							component= "input"
						/>
					</Grid>
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
							<Button color="primary" type="submit">
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
	hideModal: PropTypes.func,
	handleSubmit: PropTypes.func
}

const mapStateToProps = null;
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
	modalActionCreators: bindActionCreators(modalActions, dispatch)
  })
  
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxFrom = reduxForm({
	form: FORM_NAME
})

export default compose(
	withStyles(styles),
	withConnect,
	withReduxFrom
)(TaskForm)
