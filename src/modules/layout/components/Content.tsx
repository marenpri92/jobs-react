import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Content: React.FC = ({ children }) => (
    <Card>
        <CardContent>
            {children}
        </CardContent>
    </Card>
)

export default Content;