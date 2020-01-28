import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './jobBoxDescription.style';

type Props = {
    description?: string
}

const JobBoxDescription: React.FC<Props> = ({ description }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography data-testid="description-text" variant="body2" align="justify">{description}</Typography>
        </Box>
    )
}

export default JobBoxDescription;
