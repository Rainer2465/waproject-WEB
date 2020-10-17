import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Toolbar from 'components/Layout/Toolbar';
import React, { Fragment, memo, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const useStyles = makeStyles({
  marginBottom: {
    marginBottom: 15
  }
});

//* PV = Valor Total Vendido
//* UV = Total Unidades Vendidas
const DashboardIndexPage = memo((props: {}) => {
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

  //* PV = Valor Total Vendido
  const [dataSemana] = useState([
    { name: 'Domingo', pv: 3000 },
    { name: 'Segunda', pv: 2780 },
    { name: 'Terça', pv: 1890 },
    { name: 'Quarta', pv: 3490 },
    { name: 'Quinta', pv: 2390 },
    { name: 'Sexta', pv: 4000 },
    { name: 'Sabado', pv: 2390 }
  ]);

  //* PV = Valor Total Vendido
  const [valorMes] = useState([
    { name: '1', pv: 18000 },
    { name: '2', pv: 25000 },
    { name: '3', pv: 29000 },
    { name: '4', pv: 22000 },
    { name: '5', pv: 20000 },
    { name: '6', pv: 24000 },
    { name: '7', pv: 28000 },
    { name: '8', pv: 34000 },
    { name: '9', pv: 50000 },
    { name: '10', pv: 32000 },
    { name: '11', pv: 19000 },
    { name: '12', pv: 35000 },
    { name: '13', pv: 80000 },
    { name: '14', pv: 28000 },
    { name: '15', pv: 24000 },
    { name: '16', pv: 22000 },
    { name: '17', pv: 26000 },
    { name: '18', pv: 28000 },
    { name: '19', pv: 25000 },
    { name: '20', pv: 21000 },
    { name: '21', pv: 22000 },
    { name: '22', pv: 43000 },
    { name: '23', pv: 28000 },
    { name: '24', pv: 29000 },
    { name: '25', pv: 21000 },
    { name: '26', pv: 26000 },
    { name: '27', pv: 25000 },
    { name: '28', pv: 35000 },
    { name: '29', pv: 26000 },
    { name: '30', pv: 78000 },
    { name: '31', pv: 26000 }
  ]);

  /*const [dataPie] = useState([
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 }
  ]);*/

  const [colors] = useState(['#0088FE', '#00C49F', '#FFBB28', '#FF8042']);

  return (
    <Fragment>
      <Toolbar title='Dashboard' />

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

        <Grid item xs={12} md={5} lg={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='subtitle1'>
                Valor Vendido - Semana
              </Typography>

              <ResponsiveContainer width='100%' height={200}>
                <AreaChart data={dataSemana}>
                  <Tooltip />
                  <Area type='monotone' dataKey='pv' stroke='#FF8042' fill='#FF8042' />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={12}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant='h5'>
              Valor Vendido - Mês
            </Typography>

            <ResponsiveContainer width='100%' height={200}>
              <LineChart data={valorMes}>
                <Tooltip />
                <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
});

export default DashboardIndexPage;
