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

  return (
    <>
      {loading && <LinearProgress />}
      <Container maxWidth="lg">
        {!loading &&
          <>
            <Box my={2}>
              <Typography variant="h6" component="h1">
                {t('mealt.selector')}
              </Typography>
            </Box>
            <Box my={1}>
              <Paper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid item md={4} xs={6}>
                    <ButtonSelector href={'/recipes/time-selector'} typeSelector='typeOfMealt' text='cow' icon='fas fa-drumstick-bite' />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ButtonSelector href={'/recipes/time-selector'} typeSelector='typeOfMealt' text='pig' icon='fas fa-bacon' />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ButtonSelector href={'/recipes/time-selector'} typeSelector='typeOfMealt' text='chicken' icon='fas fa-egg' />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ButtonSelector href={'/recipes/time-selector'} typeSelector='typeOfMealt' text='fish' icon='fas fa-fish' />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <ButtonSelector href={'/recipes/time-selector'} typeSelector='typeOfMealt' text='indifferent' icon='fas fa-utensils' />
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
