import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './headerActions.style';

type IHeaderActions = {
    title: string
}

const HeaderActions: React.FC<IHeaderActions> = ({ children, title }) => {
    const classes = useStyles();

    return (
        <Grid container justify="space-between" className={classes.headerActions}>
            <Grid item xs={6}><Typography variant="h5" color="textSecondary">{title}</Typography></Grid>
            <Grid item>{children}</Grid>
        </Grid>
    )
}

export default HeaderActions;