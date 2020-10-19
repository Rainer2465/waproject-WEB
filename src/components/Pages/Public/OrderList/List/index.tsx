// eslint-disable-next-line no-restricted-imports
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Toolbar from 'components/Layout/Toolbar';
import { logError } from 'helpers/rxjs-operators/logError';
import usePaginationObservable from 'hooks/usePagination';
import IOrder from 'interfaces/models/order';
import React, { Fragment, memo, useCallback, useState } from 'react';
import { useObservable } from 'react-use-observable';
import { map } from 'rxjs/operators';
import authService from 'services/auth';
import orderService from 'services/order';

import FormDialog from '../FormDialog';

const ProductListPage = memo(() => {
  const [formOpened, setFormOpened] = useState(false);
  const [current, setCurrent] = useState<IOrder>();

  const [mergeParams, , refresh] = usePaginationObservable(
    params => orderService.list(params),
    { orderBy: 'id', orderDirection: 'asc' },
    []
  );

  const [user] = useObservable(() => {
    return authService.getUser().pipe(
      map(user => ({
        userid: `${user.firstName ?? ''}`.trim() || 'U'
      })),
      logError()
    );
  }, []);

  const handleCreate = useCallback(() => {
    setCurrent(null);
    setFormOpened(true);
  }, []);

  const formCallback = useCallback(
    (order?: IOrder) => {
      setFormOpened(false);
    },
    [current, mergeParams, refresh]
  );

  const formCancel = useCallback(() => setFormOpened(false), []);

  if (!user) {
    return null;
  }

  return (
    <Fragment>
      <Toolbar title='Pedidos' />

      <Card>
        <FormDialog opened={formOpened} order={current} onComplete={formCallback} onCancel={formCancel} />

        <CardContent>
          <h1>Bem-vindo {user.userid}</h1>
          <p>Para realizar um pedido basta clicar no botão &apos;Novo Pedido&apos;,</p>
          <p>e inserir sua descrição valor e quantidade.</p>
          <Grid container justify='space-between' alignItems='center' spacing={2}>
            <Grid item xs={12} sm={12}>
              <Button fullWidth variant='contained' color='primary' onClick={handleCreate}>
                Novo Pedido
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default ProductListPage;
