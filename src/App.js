import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//Componentes Importados
import Layout from './components/layout/Layout';
import NotFound from './components/nofound/NotFound';
import main from './components/pages/main';

import './sass/layout/layout.scss'

function App() {
  return (
  <>
    <Router>
      <Switch>
        <Route exact path ='/' component={main}  />
        <Route exact path ='/product' component={Layout}  />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
