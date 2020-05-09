import React, { Component } from 'react';
import { withStyles, Typography, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from './style';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid'; 
import { STATUSES } from '../../constants';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const listTask = [
  {
    id: 1,
    title: 'Game',
    description: 'lol',
    status: 0
  },
  {
    id: 2,
    title: 'Play ball',
    description: 'lol',
    status: 1
  },
  {
    id: 3,
    title: 'Film',
    description: 'lol',
    status: 1
  },{
    id: 4,
    title: 'ascasc',
    description: 'lol',
    status: 2
  }
]

class TaskBoard extends Component {
  renderBoard(){
    const {classes} = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map((status,index) => {
            const taskFiltered = listTask.filter(task => task.status === status.value)
            return (
              <Grid item md={4} xs={12} key={index}>
                <Box mt={4} mb={4}>
                  <div className={classes.status}>{status.label}</div>
                </Box>

                <div className={classes.wraperListTask}>
                  {
                    taskFiltered.map((task,index) => {
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
                          </CardContent>
                          <CardActions>
                            <Button size="small"></Button>
                          </CardActions>
                        </Card>
                      );
                    })
                  }
                </div>
              </Grid>
            )
          })
        }
      </Grid>
    )

    return xhtml;
  }


  render() {
    const {classes} = this.props;
    return (
       <div className={classes.baskboard}>
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon/> Thêm mới công việc
        </Button>

        {this.renderBoard()}
       </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);