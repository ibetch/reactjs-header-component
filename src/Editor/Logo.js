import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});
const Logo = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography>
        <p>form elements of configurations</p>
        <div className={classes.heading}>Mobile</div>
      </Typography>
    </React.Fragment>
  );
};
export default withStyles(styles)(Logo);
