import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';

import { useStyles, StyledBadge } from './jobLogo.style';

type Props = {
    url: string,
    isSmall: boolean
};

const JobLogo: React.FC<Props> = ({ url, isSmall }) => {
    const classes = useStyles();
    return (
        <StyledBadge
            overlap="circle"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
        >
            <Avatar alt="Travis Howard" src={`http:${url}`} className={isSmall ? classes.small : classes.large} >
                <FolderIcon />
            </Avatar>
        </StyledBadge>
    )
}

export default JobLogo;