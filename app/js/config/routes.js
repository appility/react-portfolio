var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Home = require('../components/Home');
var Portfolio = require('../components/Portfolio');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
    </Route>
    <Route path='/portfolio/:portfolioId' component={Portfolio}>
    </Route>
  </Router>
);

module.exports = routes
