var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var Link = require('react-router').Link;
var Project = require('../components/Project');


var ProjectNavigator = React.createClass({

  getInitialState: function()
  {
      return ({
          projectList: [],
          currentIndex: 0,
          currentProjectData: {}
      });
  },

  componentWillMount: function () {
    axios.get("data/projects.json")
    .then(function(response) {    
      this.setState({
        projectList:response.data
      });
    }.bind(this));
  },

  componentDidMount: function () {
    ReactDOM.findDOMNode(this.refs.nextButton).focus(); 
  },

  render: function () {
    return (
    	<div className="project-slideshow">
	        <Project data={this.currentProject()}/>
          <div className="project-slideshow-nav">
            <div className="expanded button-group">
            <button className={this.isPreviousDisabled() ? 'large button disabled' : 'large button'} disabled={this.isPreviousDisabled() ? 'true' : ''} onClick={this.showPrevious} onKeyDown={this.handleKeyPress}>Previous</button>
            <button ref="nextButton" className={this.isNextDisabled() ? 'large button disabled' : 'large button'}  disabled={this.isNextDisabled() ? 'true' : ''} onClick={this.showNext} onKeyDown={this.handleKeyPress}>Next</button>
            </div>
          </div>
		</div>
    )
  },

  isPreviousDisabled: function () {
    return (this.state.currentIndex === 0);
  },

  isNextDisabled: function () {
    return (this.state.projectList.length === this.state.currentIndex + 1);
  },

  currentProject: function () {
    return this.state.projectList[this.state.currentIndex];
  },

  handleKeyPress: function(e) {
      if (e.keyCode === 37) {
        this.showPrevious();
      }
      if (e.keyCode === 39) {
        this.showNext();
      }
  },

  showPrevious: function() {
    if (this.isPreviousDisabled()) { return }
    this.setState({
      currentIndex: this.state.currentIndex - 1
    });
  },

  showNext: function() {
    if (this.isNextDisabled()) { return }
    this.setState({
      currentIndex: this.state.currentIndex + 1
    });
  }

});

module.exports = ProjectNavigator;
