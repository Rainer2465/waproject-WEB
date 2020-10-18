import PermissionRoute from 'components/Shared/PermissionRoute';
import React, { memo, useCallback } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import AdminPage from './Admin';
import UserIndexPage from './Public';
import NewPasswordPage from './Public/NewPassword';

const Pages = memo(() => {
  const renderEmpty = useCallback(() => <div />, []);
  const renderRedirect = useCallback(() => <Redirect to='/' />, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/nova-senha' exact component={NewPasswordPage} />
        <PermissionRoute path='/admin' component={AdminPage} />
        <PermissionRoute path='/' component={UserIndexPage} />
        <Route path='/reload' exact render={renderEmpty} />
        <Route render={renderRedirect} />
      </Switch>
    </BrowserRouter>
  );
});

export default Pages;
