import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';

import Job from '../../../../core/models/job';
import useStyles from './jobBoxDetails.style';
import { dateFormatter } from '../../../shared/helpers';

type Props = {
    job: Job
}

const JobBoxDetails: React.FC<Props> = ({ job }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            {
                job &&
                <Grid container justify="space-between"
                    className={classes.root}>
                    <Grid item xs={1}>
                        <Box>
                            <Badge data-test-msg="testMsg" badgeContent={job.counter.messages_unread} color="primary">
                                <MailIcon />
                            </Badge></Box>

                    </Grid>
                    <Grid item>
                        <Typography variant="body1">State</Typography>
                        <Typography data-test-state="testState" variant="body2" color="textSecondary" gutterBottom>{job.state}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">Publicated</Typography>
                        <Typography data-test-create="testCreate" variant="body2" color="textSecondary" gutterBottom>{dateFormatter(job.created_at)}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">Expire</Typography>
                        <Typography data-test-expire="testExpire" variant="body2" color="textSecondary" gutterBottom>{dateFormatter(job.end_date)}</Typography>
                    </Grid>
                </Grid>
            }
        </React.Fragment>
    )
}

export default JobBoxDetails;