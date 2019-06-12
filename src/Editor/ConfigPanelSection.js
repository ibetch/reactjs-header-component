import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function ConfigPanel(props) {
  const { classes } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h3">
          {props.configPanelTitle}
        </Typography>
        <Typography component="p">
          form elements of configurations here
        </Typography>
      </CardContent>
    </Card>
  );
}

ConfigPanel.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ConfigPanel);
