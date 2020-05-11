import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from './style';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid'; 
import { STATUSES } from '../../constants';
import TaskList from './../../components/TaskList/index';
import TaskForm from '../../components/TaskForm';

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

  state = {
    open : false
  }

  renderBoard(){
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map((status,index) => {
            const taskFiltered = listTask.filter(task => task.status === status.value)
            return <TaskList key={index} tasks={taskFiltered} status={status}/>
          })
        }
      </Grid>
    )

    return xhtml;
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  }

  openForm = () => {
    this.setState({
      open: true,
    });
  }

  renderForm(){
    let { open } = this.state;
    let xhtml = null;
    xhtml = (
      <TaskForm onClose={this.handleClose} open={open}/>
    )
    return xhtml;
  }

  render() {
    const {classes} = this.props;
    return (
       <div className={classes.baskboard}>
        <Button onClick={this.openForm} variant="contained" color="primary" className={classes.button}>
          <AddIcon/> Thêm mới công việc
        </Button>

        {this.renderBoard()}

        {this.renderForm()}
       </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);