import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const Loading: React.FC = () => (
    <React.Fragment>
        <LinearProgress color="primary" /><Typography color="textSecondary">Please wait...</Typography>
    </React.Fragment>
)

export default Loading;