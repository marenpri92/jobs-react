import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { jobsList } from '../jobs.actions';
import Job from '../../../core/models/job';

interface StateProps {
    loading: boolean,
    list: Job[]
}

interface DispatchProps {
    getList: () => void
}

type Props = StateProps & DispatchProps

class Jobs extends React.Component<Props> {

    componentDidMount = () => this.props.getList();

    render() {
        console.log("list", this.props.list)
        return (
            <React.Fragment>Hello from Jobs component</React.Fragment>
        )
    }
}

const mapDispatchToProps = (state: AppState) => ({
    loading: state.job.loading,
    list: state.job.list,
});

const actionCreators = {
    getList: jobsList
}

const JobsContainer = connect(mapDispatchToProps, actionCreators)(Jobs);
export default JobsContainer;