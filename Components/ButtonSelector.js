import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Link from '../src/Link';
import t from '../utils/translation';

const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		whiteSpace: 'nowrap',
		marginBottom: theme.spacing(1),
	},
	icon: {
		fontSize: '60px'
	}
}));


export const ButtonSelector = ({ href, text, icon, typeSelector }) => {
	const classes = useStyles();
	return (
		<Link href={href} color="secondary">
			<Paper className={classes.paper} onClick={() => {
				localStorage.setItem(`${typeSelector}`, text);
			}}>
				<i className={`${classes.icon} ${icon}`}></i>
				<Typography variant="caption" display="block" gutterBottom>
					{t(text)}
				</Typography>
			</Paper>
		</Link>
	)
}