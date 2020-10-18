import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from 'components/Layout/Drawer';
import PermissionRoute from 'components/Shared/PermissionRoute';
import { enRoles } from 'interfaces/models/user';
import AccountMultipleIcon from 'mdi-react/AccountMultipleIcon';
import StarIcon from 'mdi-react/StarIcon';
import ViewDashboardIcon from 'mdi-react/ViewDashboardIcon';
import React, { memo, useCallback, useRef, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import DashboardIndexPage from './Dashboard';
import SamplePage from './Sample';
import UserIndexPage from './Users';

export const ScrollTopContext = React.createContext<Function>(() => {});

interface IProps {
  colSpan: number;
  error?: any;
  role?: enRoles | enRoles[];
  loading?: boolean;
  hasData: boolean;
  onTryAgain: () => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100vw',
    height: '100vh'
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100vw',
    height: '100vh',
    overflow: 'auto',
    padding: theme.variables.contentPadding,
    [theme.breakpoints.up('sm')]: {
      padding: theme.variables.contentPaddingUpSm
    }
  }
}));

const AdminPage = memo((props: IProps) => {
  const classes = useStyles(props);

  const mainContent = useRef<HTMLDivElement>();
  const [menu] = useState([
    { path: '/admin', display: 'Dashboard', icon: ViewDashboardIcon },
    {
      path: '/admin/usuarios',
      display: 'Usuários',
      role: enRoles.admin,
      icon: AccountMultipleIcon
    },
    { path: '/admin/exemplos', display: 'Exemplos', icon: StarIcon }
  ]);

  const scrollTop = useCallback(() => setTimeout(() => mainContent.current.scrollTo(0, 0), 100), []);
  const renderRedirect = useCallback(() => <Redirect to='/admin' />, []);

  return (
    <div className={classes.root}>
      <ScrollTopContext.Provider value={scrollTop}>
        <Drawer menu={menu}>
          <main ref={mainContent} className={classes.content}>
            <Switch>
              <PermissionRoute path='/admin/exemplos' role={enRoles.admin} component={SamplePage} />
              <PermissionRoute path='/admin/usuarios' role={enRoles.admin} component={UserIndexPage} />
              <PermissionRoute path='/admin' component={DashboardIndexPage} role={enRoles.admin} />
              <Route render={renderRedirect} />
            </Switch>
          </main>
        </Drawer>
      </ScrollTopContext.Provider>
    </div>
  );
});

export default AdminPage;
