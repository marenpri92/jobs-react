import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Jobs from '../modules/job/views/Jobs';

const Routes = () => (
    <Switch>
        <Redirect exact={true} path="/" to="/job" />
        <Route exact={true} path="/job" component={Jobs} />
    </Switch>
)

export default Routes;