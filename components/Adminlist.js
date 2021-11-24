import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(0, 0, 2),
  },
}));


export default function AdminList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
          <div className={classes.demo}>
            <List dense={dense}>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Jon D. Tuggle - President"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Derrek Oscarson - Vice President"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Cody Durrwachter - Plant Manager"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Chris McFarland - Customer Relations Manager/Route Supervisor"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Heather Nuckols - Assistant Medical Director | hnuckols.cls@gmail.com"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircleIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Emily Smith - Assistant Medical Director | esmith.cls@gmail.com"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
            </List>
          </div>
    </div>
  );
}