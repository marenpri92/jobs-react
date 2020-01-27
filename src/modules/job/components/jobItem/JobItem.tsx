import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Job from '../../../../core/models/job';
import JobLogo from '../../../shared/jobLogo/JobLogo';

type Props = {
    job: Job,
    handlerNavigate: () => void
}

const JobItem: React.FC<Props> = ({ job, handlerNavigate }) => (
    <React.Fragment>
        {
            job && (
                <TableRow hover onClick={handlerNavigate}>
                    <TableCell><JobLogo data-test-url="testUrl" url={job.thumbnail} isSmall={true} /></TableCell>
                    <TableCell data-test-title="testTitle" scope="row">{job.title}</TableCell>
                    <TableCell align="center"><ArrowForwardIosIcon color="secondary" /></TableCell>
                </TableRow>
            )
        }
    </React.Fragment>

)

export default JobItem;