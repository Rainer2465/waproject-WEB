import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from 'components/Layout/Drawer';
import { enRoles } from 'interfaces/models/user';
import ClipboardArrowBottomIcon from 'mdi-react/ClipboardArrowBottomIcon';
import ShoppingIcon from 'mdi-react/ShoppingIcon';
import React, { memo, useCallback, useRef, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import UserIndexPage from './ProductList';
import OrderIndexPage from './UserOrder';

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

const UserPage = memo((props: IProps) => {
  const classes = useStyles(props);

  const mainContent = useRef<HTMLDivElement>();
  const [menu] = useState([
    { path: '/user', display: 'Produtos', icon: ShoppingIcon },
    { path: '/pedidos', display: 'Pedidos', icon: ClipboardArrowBottomIcon }
  ]);

  const scrollTop = useCallback(() => setTimeout(() => mainContent.current.scrollTo(0, 0), 100), []);
  const renderRedirect = useCallback(() => <Redirect to='/user' />, []);

  return (
    <div className={classes.root}>
      <ScrollTopContext.Provider value={scrollTop}>
        <Drawer menu={menu}>
          <main ref={mainContent} className={classes.content}>
            <Switch>
              <Route path='/user' component={UserIndexPage} />
              <Route path='/pedidos' component={OrderIndexPage} />
              <Route render={renderRedirect} />
            </Switch>
          </main>
        </Drawer>
      </ScrollTopContext.Provider>
    </div>
  );
});

export default UserPage;
