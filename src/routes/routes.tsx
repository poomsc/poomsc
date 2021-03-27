import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ThemedSuspense from 'pages/Suspense';
import About from 'pages/About';
import Skill from 'pages/Skill';
import Experiment from 'pages/Experiment';
import Defi from 'pages/DeFi';

const Routes: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback={<ThemedSuspense />}>
      <Router>
        <Switch>
          <Route path={['/', '/about']} component={About} />
          <Route path="/skill" component={Skill} />
          <Route path="/experiment" component={Experiment} />
          <Route path="/defi" component={Defi} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
