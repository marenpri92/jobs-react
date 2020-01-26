import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import useStyles from './layout.style';
import Header from './components/Header';
import Content from './components/Content';

const Layout: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container maxWidth="sm">
                <Header />
                <Content>
                    {children}
                </Content>
            </Container>
        </Box>
    )
}

export default Layout;