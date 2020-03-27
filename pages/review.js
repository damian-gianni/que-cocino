import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from "@material-ui/core/Box";
import t from '../utils/translation';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gridGap: theme.spacing(3),
	},
	paper: {
		padding: theme.spacing(1),

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
	const [typeOfVegetables, setTypeOfVegetables] = useState(false);
	const [typeOfMealt, setTypeOfMealt] = useState(false);
	const [time, setTime] = useState(false);
	const classes = useStyles();

	useEffect(() => {
		setTypeOfFood(localStorage.getItem('typeOfFood'));
		setTypeOfVegetables(localStorage.getItem('typeOfVegetables'));
		setTypeOfMealt(localStorage.getItem('typeOfMealt'));
		setTime(localStorage.getItem('time'));
	}, []);

	return (
		<>
			{loading && <LinearProgress />}
			<Container maxWidth="lg">
				{!loading &&
					<>
						<Box my={2}>
							<Typography variant="h6" component="h1">
								{t('review')}
							</Typography>
						</Box>
						<Box my={1}>
							<Paper className={classes.paper}>
								<Grid container spacing={3}>
									<Grid item xs={12}>
										{typeOfFood &&
											<Paper className={classes.paper}>
												<Typography component="p">
													<b>{t('review.food')}:</b> {t(typeOfFood)}
												</Typography>
											</Paper>
										}
										{typeOfVegetables &&
											<Paper className={classes.paper}>
												<Typography component="p">
													<b>{t('review.vegetables')}:</b> {t(typeOfVegetables)}
												</Typography>
											</Paper>
										}
										{typeOfMealt &&
											<Paper className={classes.paper}>
												<Typography component="p">
													<b>{t('review.mealt')}:</b> {t(typeOfMealt)}
												</Typography>
											</Paper>
										}
										{time &&
											<Paper className={classes.paper}>
												<Typography component="p">
													<b>{t('review.time')}:</b> {t(time)}
												</Typography>
											</Paper>
										}
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
