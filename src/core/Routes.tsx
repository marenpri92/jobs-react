import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Jobs from '../modules/job/views/Jobs';
import Layout from '../modules/layout/Layout';
import JobDetails from '../modules/job/views/JobDetails';

const Routes = () => (
    <Switch>
        <Layout>
            <Redirect exact={true} path="/" to="/job" />
            <Route exact={true} path="/job" component={Jobs} />
            <Route exact={true} path="/job/:id" component={JobDetails} />
        </Layout>
    </Switch>
)

export default Routes;