const styles = (theme) => {
  return {
    taskboard: {
      display: 'flex',
			alignItem: 'center',
    },
    shape: {
      //backgroundColor: 'red',
      // color: 'white',
      padding: 20,
      margin: 10,
      // borderRadius: 4
      backgroundColor: theme.color.primary,
      color: theme.shape.textColor
    }
  }
}
export default styles;