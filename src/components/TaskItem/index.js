import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import styles from './style';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';


class TaskItem extends Component {
	render() {
		let { task,index,status,classes } = this.props; 
		return (
			<Card key={index}>
				<CardContent>
					<Grid container justify="space-between">
						<Grid item md={8}>
							<Typography component="h2">
								{
									task.title
								}
							</Typography>
						</Grid>
						<Grid item md={4}>
							{
								status.label
							}
						</Grid>
					</Grid>
						<p>{task.description}</p>
				</CardContent>

				<CardActions className={classes.cardActions}>
					<Fab color="primary" size="small" aria-label="Edit" className={classes.fab}>
							<Icon fontSize="small">
								edit_icon
							</Icon>
					</Fab>
					<Fab color="primary" size="small" aria-label="Delete" className={classes.fab}>
							<Icon fontSize="small">
								delete_icon
							</Icon>
					</Fab>
				</CardActions>
			</Card>	
		);
	}
}

export default withStyles(styles)(TaskItem);