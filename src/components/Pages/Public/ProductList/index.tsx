import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Toolbar from 'components/Layout/Toolbar';
import React, { Fragment, memo, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';

const useStyles = makeStyles({
  marginBottom: {
    marginBottom: 15
  }
});

//* PV = Valor Total Vendido
//* UV = Total Unidades Vendidas
const OrderIndexPage = memo((props: {}) => {
  const classes = useStyles(props);
  const [dataMes] = useState([
    { name: 'Janeiro', uv: 4000, pv: 2400 },
    { name: 'Fevereiro', uv: 3000, pv: 1398 },
    { name: 'Março', uv: 2000, pv: 9800 },
    { name: 'Abril', uv: 2780, pv: 3908 },
    { name: 'Maio', uv: 1890, pv: 4800 },
    { name: 'Junho', uv: 2390, pv: 3800 },
    { name: 'Julho', uv: 3490, pv: 4300 },
    { name: 'Agosto', uv: 4000, pv: 2400 },
    { name: 'Setembro', uv: 3490, pv: 1398 },
    { name: 'Outubro', uv: 2000, pv: 9800 },
    { name: 'Novembro', uv: 1890, pv: 4800 },
    { name: 'Dezembro', uv: 2390, pv: 4300 }
  ]);

  const [colors] = useState(['#0088FE', '#00C49F', '#FFBB28', '#FF8042']);

  return (
    <Fragment>
      <Toolbar title='Produtos' />

      <Grid container spacing={3} className={classes.marginBottom}>
        <Grid item xs={12} md={5} lg={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='subtitle1'>
                Total Produto | Valor Vendido - Mês
              </Typography>

              <ResponsiveContainer width='100%' height={200}>
                <BarChart data={dataMes}>
                  <Tooltip />
                  <Bar dataKey='uv' fill={colors[0]} />
                  <Bar dataKey='pv' fill={colors[3]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
});

export default OrderIndexPage;
