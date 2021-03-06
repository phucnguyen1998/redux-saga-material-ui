import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from './style';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid'; 
import { STATUSES } from '../../constants';
import TaskList from './../../components/TaskList/index';
import TaskForm from '../TaskForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/task';
import * as modalActions from './../../actions/modal';
import PropsType from 'prop-types';
import SearchBox from '../../components/SearchBox';


class TaskBoard extends Component {

  state = {
    open : false
  }

  componentDidMount() {
    const { taskActionsCreators } = this.props;
    const { fetchListTask } = taskActionsCreators;
    fetchListTask()
  }

  renderBoard(){
    const {listTask} = this.props;
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
    const { modalActionCreators } = this.props;
    const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm/>)
  }

  // renderForm(){
  //   let { open } = this.state;
  //   let xhtml = null;
  //   xhtml = (
  //     <TaskForm onClose={this.handleClose} open={open}/>
  //   )
  //   return xhtml;
  // }

  handleFilter = (e) => {
    //console.log(e);
    const {value} = e.target;
    const { taskActionsCreators } = this.props;
    const { filterTask } = taskActionsCreators; 
    filterTask(value);
  }

  renderSearchBox(){
    // data on state
    let xhtml = null; 
    xhtml = <SearchBox handleChange={this.handleFilter}/>
    return xhtml;
  }

  render() {
    const {classes} = this.props;
    return (
       <div className={classes.baskboard}>
        <Button 
          onClick={this.openForm} 
          variant="contained" 
          color="primary" 
          className={classes.button}
        >
          <AddIcon/> Thêm mới công việc
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {/* {this.renderForm()} */}
       </div>
    );
  }
}

TaskBoard.PropsType = {
  classes: PropsType.object,
  taskActionsCreators: PropsType.shape({
    fetchListTask: PropsType.func,
    filterTask: PropsType.func
  }),
  modalActions: PropsType.shape({
    showModal: PropsType.func,
    hideModal: PropsType.func,
    changeModalTitle: PropsType.func,
    changeModalContent: PropsType.func
  }),
  listTask: PropsType.array
}


const mapStateToProps = (state, ownProps) => {
  return {
    listTask: state.task.listTask
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch)
  }
}



export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));