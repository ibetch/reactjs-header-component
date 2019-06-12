import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function ConfigPanel(props) {
  const { classes } = props;
  return (
    <div>
      <Typography variant="h6" component="h3">
        {props.configPanelTitle}
      </Typography>
      {props.children}
    </div>
  );
}

ConfigPanel.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ConfigPanel);
