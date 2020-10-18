import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Toolbar from 'components/Layout/Toolbar';
import React, { Fragment, memo, useState } from 'react';

const OrderIndexPage = memo(() => {
  const [produto] = useState({
    name: 'Phone XL',
    price: 799,
    description:
      'Maior desempenho Sua memória RAM de 3 GB, lhe permitirá executar vários aplicativos ao mesmo tempo, jogar e navegar rapidamente e sem inconvenientes.',
    quantidade: '1'
  });

  return (
    <Fragment>
      <Toolbar title='Produtos' />
      <Card>
        <CardContent>
          <Grid container justify='space-between' alignItems='center' spacing={2}>
            <Grid item xs={6} sm={3} lg={3}>
              <div>
                <img
                  src='https://i.zst.com.br/images/smartphone-apple-iphone-6-6-16gb-16gb-8-0-mp-apple-a8-ios-8-photo29396423-12-3d-10.jpg'
                  width='350'
                />
              </div>
            </Grid>
            <Grid item xs={1} sm={1} lg={9}>
              <div>Produto: {produto.name}</div>
              <div>Preço: R$ {produto.price}</div>
              <div>Descrição: {produto.description}</div>
              <div>
                <input value={produto.quantidade} />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default OrderIndexPage;
