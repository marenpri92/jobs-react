import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Job from '../../../../core/models/job';
import useStyles from './jobBoxDetails.style';
import { dateFormatter } from '../../../shared/helpers';

type Props = {
    job: Job
}

const JobBoxDetails: React.FC<Props> = ({ job }) => {
    const classes = useStyles();
    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container direction={tablet ? "row" : "column"} justify="space-between"
            className={classes.root}>
            <Grid item xs={2} md={2} lg={12}>
                <Box textAlign={tablet ? "left" : "right"}>
                    <Badge badgeContent={job.counter.messages_unread} color="primary">
                        <MailIcon />
                    </Badge></Box>

            </Grid>
            <Grid item xs={2} md={2} lg={12}>
                <Typography variant="body1">State</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>{job.state}</Typography>
            </Grid>
            <Grid item xs={4} md={4} lg={12}>
                <Typography variant="body1">Publicated</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>{dateFormatter(job.created_at)}</Typography>
            </Grid>
            <Grid item xs={3} md={4} lg={12}>
                <Typography variant="body1">Expire</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>{dateFormatter(job.end_date)}</Typography>
            </Grid>
        </Grid>
    )
}

export default JobBoxDetails;