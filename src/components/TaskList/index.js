import React, { Component } from 'react';
import { withStyles, Box } from '@material-ui/core';
import styles from './style';
import Grid from '@material-ui/core/Grid';
import TaskItem from './../TaskItem';


class TaskList extends Component {

	render() {
		const {classes, tasks, status} = this.props;
		return (
			<Grid item md={4} xs={12}>
				<Box mt={4} mb={4}>
					<div className={classes.status}>{status.label}</div>
				</Box>

				<div className={classes.wraperListTask}>
					{
						tasks.map((task,index) => {
							return (
								<TaskItem key ={index} task={task} index={index} status={status}/>
							);
						})
					}
				</div>
			</Grid>
		);
	}
}

export default withStyles(styles)(TaskList);