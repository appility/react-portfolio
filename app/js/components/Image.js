var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Image = React.createClass({

  getInitialState: function () {
    return { imageLoaded: false };
  },

  onImageLoad: function() {
    this.setState({ imageLoaded: true });
  },

  isLoaded:function(value) {
    return 'image '+ (this.state.imageLoaded ?'image-loaded':'');
  },

  componentWillReceiveProps: function(nextProps) {;
    this.setState({ imageLoaded: false });
  },

  componentDidReceiveProps: function(nextProps) {;
    this.setState({ imageLoaded: false });
  },

  render: function () {
    var imageClassName = classNames({
      'image ': true,
      'image-loaded': this.state.imageLoaded
    });
    return (
      <div className="image-wrapper spinner">
        <img className={imageClassName} ref="img" onLoad={ this.onImageLoad } 
        sizes="(max-width: 40em) 100vw, 60vw"
        srcSet={"img/" + this.props.src + "_320.png 320w, " + 
                "img/" + this.props.src + "_480.png 480w, " +
                "img/" + this.props.src + "_640.png 640w, " +
                "img/" + this.props.src + "_800.png 800w, " +
                "img/" + this.props.src + "_960.png 960w, " +
                "img/" + this.props.src + "_1024.png 1024w, " +
                "img/" + this.props.src + "_1280.png 1280w"} 
        src={"img/" + this.props.src + "_1280.png"} 
        width="640" height="400"
        alt="Showcase" /> 
      </div>
    )
  }
});

module.exports = Image;
