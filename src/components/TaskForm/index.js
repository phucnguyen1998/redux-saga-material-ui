import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Modal, Grid, Box } from '@material-ui/core';
import PropTypes from 'prop-types';


class TaskForm extends Component {
	render() {
		let { open,onClose,classes } = this.props; 
		return (
			<Modal open={open} onClose={onClose}>
				<div className={classes.modal}>
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
									<Button onClick={onClose}>
										Hủy
									</Button>
								</Box>
							</Grid>
						</Grid>
					</form>
				</div>
			</Modal>
		);
	}
}

TaskForm.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	classes: PropTypes.object
	
}

export default withStyles(styles)(TaskForm);