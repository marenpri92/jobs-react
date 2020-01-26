import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Jobs from '../modules/job/views/Jobs';
import Layout from '../modules/layout/Layout';

const Routes = () => (
    <Switch>
        <Layout>
            <Redirect exact={true} path="/" to="/job" />
            <Route exact={true} path="/job" component={Jobs} />
        </Layout>
    </Switch>
)

export default Routes;