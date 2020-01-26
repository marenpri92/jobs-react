import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Job from '../../../../core/models/job';
import JobLogo from '../../../shared/jobLogo/JobLogo';

type Props = {
    row: Job,
    handlerNavigate: () => void
}


const JobItem: React.FC<Props> = ({ row, handlerNavigate }) => (
    <TableRow hover onClick={handlerNavigate}>
        <TableCell><JobLogo url={row.thumbnail} active={row.state} /></TableCell>
        <TableCell scope="row"> {row.title} </TableCell>
        <TableCell align="center"><ArrowForwardIosIcon color="secondary" /></TableCell>
    </TableRow>
)

export default JobItem;