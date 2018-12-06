import Dashboard from './components/Dashboard';
import Contacts from './components/Contacts';
import Reports from './components/Reports';
import Tasks from './components/Tasks';
import Products from './components/Products';
import Settings from './components/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import ReportIcon from '@material-ui/icons/BarChart';
import TaskIcon from '@material-ui/icons/List';
import ProductIcon from '@material-ui/icons/ShoppingCart';
import { Route } from 'react-router-dom';
import React from 'react';

export const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    icon: <DashboardIcon />,
    text: 'Dashboard'
  },
  {
    path: '/contacts',
    component: Contacts,
    icon: <PeopleIcon />,
    text: 'Contacts'
  },
  {
    path: '/reports',
    component: Reports,
    icon: <ReportIcon />,
    text: 'Reports'
  },
  {
    path: '/tasks',
    component: Tasks,
    icon: <TaskIcon />,
    text: 'Tasks'
  },
  {
    path: '/products',
    component: Products,
    icon: <ProductIcon />,
    text: 'Products'
  },
  {
    path: '/settings',
    component: Settings,
    icon: <SettingsIcon />,
    text: 'Settings'
  }
];

export const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};
