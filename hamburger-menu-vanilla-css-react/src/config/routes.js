import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import MainContainer from './../containers/Main/MainContainer';
import SkynetContainer from './../containers/Skynet/SkynetContainer';
import AboutContainer from './../containers/About/AboutContainer';
import ProductsContainer from './../containers/Products/ProductsContainer';
import CareersContainer from './../containers/Careers/CareersContainer';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={SkynetContainer} />
      <Route path="about" component={AboutContainer}/>
      <Route path="products" component={ProductsContainer} />
      <Route path="careers" component={CareersContainer} />
    </Route>
  </Router>
)

export default routes
