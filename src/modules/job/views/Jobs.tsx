import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { AppState } from '../../../store';
import { jobsList, jobsShuffle, jobSelected } from '../jobs.actions';
import Job from '../../../core/models/job';
import HeaderActions from '../../shared/headerActions/HeaderActions';
import Loading from '../../shared/loading/Loading';
import JobsList from '../components/jobsList/JobsList';

type Props = {
    loading: boolean,
    list: Job[],
    job: Job,
    error: string,
    getList: () => void,
    shuffle: () => void,
    select: (job: Job) => void,
}

class Jobs extends React.Component<Props> {

    componentDidMount = () => this.props.getList();

    actions = () => (<Button variant="contained" color="primary" onClick={() => this.props.shuffle()} >shuffle</Button>)

    listRender = () => this.props.loading ? <Loading /> : this.props.error ?
        <Typography>No data to display</Typography> :
        <JobsList list={this.props.list} select={this.props.select} />

    render() {
        console.log("list", this.props.list)
        return (
            <React.Fragment>
                <HeaderActions title="Jobs list">{this.actions()}</HeaderActions>
                {this.listRender()}
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (state: AppState) => ({
    loading: state.job.loading,
    list: state.job.list,
    job: state.job.details,
    error: state.job.error
});

const actionCreators = {
    getList: jobsList,
    shuffle: jobsShuffle,
    select: jobSelected
}

const JobsContainer = connect(mapDispatchToProps, actionCreators)(Jobs);
export default JobsContainer;