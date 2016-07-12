var React = require('react');
var MainLayout = require('../components/MainLayout');
var ProjectNavigator = require('../components/ProjectNavigator');

var Home = React.createClass({
  render: function () {
    return (
        <MainLayout>
           <ProjectNavigator />
        </MainLayout>
    )
  }
});

module.exports = Home;