import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import {useStyles, StyledBadge} from './jobLogo.style';

type Props = {
    url: string,
    active: string
};

const JobLogo: React.FC<Props> = ({ url, active }) => {
    const classes = useStyles();
    return (
        <StyledBadge
            overlap="circle"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
        >
            <Avatar alt="Travis Howard" src={`http:${url}`} className={active ? classes.small : classes.large} />
        </StyledBadge>
    )
}

export default JobLogo;