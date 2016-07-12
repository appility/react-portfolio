var React = require('react');
var Project = require('../components/Project');

var ProjectContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    }
  },
  render: function () {
    return (
      <Project />
    )
  }
});

module.exports = ProjectContainer;