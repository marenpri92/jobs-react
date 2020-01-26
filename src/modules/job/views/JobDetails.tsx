import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import Job from '../../../core/models/job';
import HeaderActions from '../../shared/headerActions/HeaderActions';
import { AppState } from '../../../store';
import { jobsList, jobDelete } from '../jobs.actions';
import JobLogo from '../../shared/jobLogo/JobLogo';
import JobBoxDetails from '../components/jobBoxDetails/JobBoxDetails';
import JobBoxDescription from '../components/jobBoxDescription/jobBoxDescription';

interface StateProps {
    job: Job,
    loading: boolean,
    error: string,
    firstLoading: boolean,
    jobsList: () => void,
    jobDelete: (job: Job) => void
};

type Props = StateProps & RouteComponentProps;

class JobDetails extends React.Component<Props> {

    componentDidMount = () => this.props.jobsList();

    actions = () => (
        <React.Fragment>
            <Button variant="text" color="primary" onClick={() => this.props.history.push("/job")} >back</Button>
            <Button variant="outlined" color="primary" onClick={() => this.props.jobDelete(this.props.job)} >delete</Button>
        </React.Fragment>
    )

    render() {
        const { job, firstLoading } = this.props;

        return (
            <React.Fragment>
                {!firstLoading && <React.Fragment>
                    <HeaderActions title="Job details"> {this.actions()} </HeaderActions>
                    <Grid container justify="center" alignContent="center" alignItems="center" direction="column">
                        <JobLogo url={job.thumbnail} active={""} />
                        <Typography variant="h6" align="center">{job.title}</Typography>
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>{job.city}</Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} lg={4}><JobBoxDetails job={job} /></Grid>
                        <Grid item xs={12} lg={8}><JobBoxDescription description={job.description} /></Grid>
                    </Grid>
                </React.Fragment>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    job: state.job.details,
    firstLoading: state.job.firstLoading
})

const actionCreators = {
    jobsList,
    jobDelete
}

const JobDetailsComponent = connect(mapStateToProps, actionCreators)(JobDetails);

export default JobDetailsComponent;