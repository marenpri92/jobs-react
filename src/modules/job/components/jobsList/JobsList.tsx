import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import StyledTableCell from './jobsList.style';
import Job from '../../../../core/models/job';
import JobItem from '../jobItem/JobItem';

interface JobProps {
    list: Job[],
    select: (job: Job) => void
}

type Props = JobProps & RouteComponentProps;

const JobsList: React.FC<Props> = ({ list, select, history }) => {

    const headers = ["", "TITLE", ""];

    const handlerNavigate = (job: Job) => {
        select(job);
        history.push(`job/${job.id}`)
    };

    return (
        <Table >
            <TableHead>
                <TableRow>
                    {
                        headers.map((item: string, index: number) => (
                            <StyledTableCell key={index}>{item}</StyledTableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    list.map((row: Job) => (
                        <JobItem key={row.id} job={row} handlerNavigate={() => handlerNavigate(row)} />
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default withRouter(JobsList);