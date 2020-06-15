import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { Grid, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from './../../actions/modal';
import { Field, reduxForm } from 'redux-form';
import renderTextField from './../../components/FormHelper/TextFiled';
import validate from './validate';


class TaskForm extends Component {

	handleSubmitForm = (data) => {
		console.log('data', data);
	}

	// required = (value) => {
	// 	let error = 'Vui lòng nhập đủ thông tin!';
	// 	if(value !== null && typeof value !== 'undefined' && value.trim() !== ''){
	// 		error = null;
	// 	}
	// 	return error;
	// }

	// minlength = value => {
	// 	let error = null;
	// 	if(value.length < 5 ){
	// 		error = 'Tiêu đề phải từ 5 ký tự trở lên.'
	// 	}
	// 	return error;
	// }

	render() {
		//console.log('this.props', this.props);
		
		let { classes, modalActionCreators, handleSubmit, invalid, submitting	 } = this.props; 
		const { hideModal } = modalActionCreators;
		return (
			<form onSubmit = {handleSubmit(this.handleSubmitForm)}>
				<Grid container spacing={5}>
					<Grid item md={12}>
						<Field
							id="title"
							label= "Tiêu đề"
							className={classes.textField}
							name= "title"
							component={renderTextField}
							// validate={[this.required, this.minlength,]}
						/>
					</Grid>
					<Grid item md={12}>
						<Field
							id="Description"
							label= "Mô tả"
							className={classes.textField}
							name= "description"
							multiline
							component={renderTextField}
						/>
					</Grid>
					<Grid item md={12}>
						<Box display="flex" flexDirection="row-reverse">
							<Button disabled={invalid || submitting} color="primary" type="submit">
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
	form: FORM_NAME,
	validate
})

export default compose(
	withStyles(styles),
	withConnect,
	withReduxFrom
)(TaskForm)
