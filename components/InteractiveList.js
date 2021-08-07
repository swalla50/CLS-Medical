import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';

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


export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
          <Typography variant="h6" className={classes.title} style={{fontFamily:"sans-serif", paddingTop:0, color:"#dc0000", fontWeight: "bold"}}>
            PRODUCTS
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
                <ListItem>
                  <ListItemIcon>
                    <LocalLaundryServiceIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="All types of Gown"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalLaundryServiceIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Breast Capes and draw sheets (for OBGYN use)"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalLaundryServiceIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Bedding (sheets, blankets, pillow cases, etc.)"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalLaundryServiceIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Thermal blankets"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalLaundryServiceIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Scrubs"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalLaundryServiceIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Robes"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalLaundryServiceIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="All terry items"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalLaundryServiceIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Mops"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalLaundryServiceIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dry-cleaning"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalLaundryServiceIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Annually/semi anually cleaning of curtains"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalLaundryServiceIcon style={{color:"#00338e" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="If your facility needs items that are not listed here, rest assured that we can provide any item needed!"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
            </List>
          </div>
    </div>
  );
}