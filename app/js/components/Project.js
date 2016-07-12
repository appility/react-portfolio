var React = require('react');
var Image= require('../components/Image');

var Project = React.createClass({

	getDefaultProps: function () {
		return { 
			data: { 
    			title: "",
    			description: "",
    			tags: [],
    			imageRoot: ""
    		} };
	},

	componentDidMount: function () {
    	document.title = this.props.data.title;
  	},

  	render: function () {
		return (
	      <div className="project">
	          <h4>{this.props.data.title}</h4>
	          <div className="project-description">
	          <div  />
		          <p aria-describedby="emailLabel1 emailLabel2" dangerouslySetInnerHTML={ {__html: this.props.data.description} }></p>
					{this.props.data.links &&
		          	<ul className="no-bullet">
		          	{this.props.data.links.map((link, index) => (
		          		<li key={index}>
		          		<dl>
		          			<dt><a href={link.url} target="_blank" rel>{link.text}</a></dt>
		            		<dd>{link.description}</dd>
		            	</dl>
		            	</li>
	    			))}
	    			</ul>
		           }
	           </div>
	          {this.props.data.tags &&
	          	<div className="label-group">
	          	{this.props.data.tags.map((tag, index) => (
	          		<span className="label" id="emailLabel" key={index}>{tag}</span>
    			))}
    			
    			</div>
	           }
	        	<div>
	          	{this.props.data.imageRoot &&
	          		<Image src={this.props.data.imageRoot} />
	           	}
	          </div>
	      </div>
	    );
  }
});

module.exports = Project;


