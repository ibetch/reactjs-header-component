import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MainNav = () => {
  return (
    <React.Fragment>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={''}>Main Navigation</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>form elements of configurations</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </React.Fragment>
  );
};
export default MainNav;
