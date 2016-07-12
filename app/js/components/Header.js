var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
    <header>
      <div className="row">
        <div className="small-6 columns">
          <h2>Portfolio <small>Version 1.0</small></h2>
        </div>
        <div className="small-6 columns">
          <ul className="menu align-right">
            <li><a href="mailto:contact@dermotbyrne.net" className="icon-peek"><span className="icon-envelope"></span>Email</a></li>
            <li><a href="https://uk.linkedin.com/in/dermotbyrne" target="_blank" className="icon-peek"><span className="icon-peek icon-linkedin-alt"></span>Linkedin</a></li>
            <li><a href="https://github.com/appility" target="_blank" className="icon-peek"><span className="icon-peek icon-github"></span>Github</a></li>
        </ul>
        </div>
      </div>
    </header>
    )
  }
});

module.exports = Header;
