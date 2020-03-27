import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from "@material-ui/core/Box";
import t from '../../utils/translation';
import { Typography } from '@material-ui/core';
import { ButtonSelector } from '../../Components/ButtonSelector';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  }
}));

export default () => {
  const [loading, setLoading] = useState(false);
  const [typeOfFood, setTypeOfFood] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setTypeOfFood(localStorage.getItem('typeOfFood'));
  }, []);

  return (
    <>
      {loading && <LinearProgress />}
      <Container maxWidth="lg">
        {!loading &&
          <>
            <Box my={2}>
              <Typography variant="h6" component="h1">
                {t('vegetables.selector')}
              </Typography>
            </Box>
            <Box my={1}>
              <Paper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid item md={4} xs={6}>
                    <ButtonSelector href={typeOfFood === 'indifferent' ? `/recipes/mealt-selector` : 'time-selector'} typeSelector='typeOfVegetables' text='root' icon='fas fa-carrot' />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ButtonSelector href={typeOfFood === 'indifferent' ? `/recipes/mealt-selector` : 'time-selector'} typeSelector='typeOfVegetables' text='bulb' icon='fas fa-spa' />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ButtonSelector href={typeOfFood === 'indifferent' ? `/recipes/mealt-selector` : 'time-selector'} typeSelector='typeOfVegetables' text='stem' icon='fas fa-seedling' />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ButtonSelector href={typeOfFood === 'indifferent' ? `/recipes/mealt-selector` : 'time-selector'} typeSelector='typeOfVegetables' text='leaf' icon='fas fa-leaf' />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ButtonSelector href={typeOfFood === 'indifferent' ? `/recipes/mealt-selector` : 'time-selector'} typeSelector='typeOfVegetables' text='flower' icon='fas fa-fan' />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ButtonSelector href={typeOfFood === 'indifferent' ? `/recipes/mealt-selector` : 'time-selector'} typeSelector='typeOfVegetables' text='indifferent' icon='fas fa-utensils' />
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </>
        }
      </Container>
    </>
  );
}
