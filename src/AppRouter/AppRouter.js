import React from 'react';
import Main from '../components/Main';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Producto from '../components/Producto'
import NotFoundPage from '../components/NotFoundPage';
import Contact from '../components/Contact'
import Retoque from '../components/Retoque'
import Moda from '../components/Moda'
import Interiores from '../components/Interiores'
import Header from '../components/Header';

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
    <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/producto">
            <Producto />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/retoque">
            <Retoque />
          </Route>
          <Route path="/moda">
            <Moda />
          </Route>
          <Route path="/interior">
            <Interiores />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
    
	</Router>
);

export default AppRouter;
