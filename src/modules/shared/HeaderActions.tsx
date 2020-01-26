import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './shared.style';
import { HeaderActions as IHeaderActions } from './types';

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