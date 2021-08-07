import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab variant="extended">
        <PhoneAndroidIcon className={classes.extendedIcon} />
        Contact Us!
      </Fab>
    </div>
  );
}