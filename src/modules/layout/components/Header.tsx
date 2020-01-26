import React from 'react';
import Grid from '@material-ui/core/Grid';
import WorkIcon from '@material-ui/icons/Work';
import Typography from '@material-ui/core/Typography';

import useStyles from '../layout.style';

const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container alignContent="center" alignItems="center" direction="column">
            <WorkIcon className={classes.icon} color="secondary" />
            <Typography variant="h3">Job offers</Typography>
        </Grid>
    )
}

export default Header;