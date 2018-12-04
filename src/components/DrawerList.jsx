import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from '@material-ui/icons/Dashboard';
import Settings from '@material-ui/icons/Settings';
import People from '@material-ui/icons/People';
import Report from '@material-ui/icons/BarChart';
import Task from '@material-ui/icons/List';
import Product from '@material-ui/icons/ShoppingCart';
const DrawerList = () => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>{<Dashboard />}</ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>{<People />}</ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>{<Report />}</ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>{<Task />}</ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>{<Product />}</ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>{<Settings />}</ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  );
};

export default DrawerList;
