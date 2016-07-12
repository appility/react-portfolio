var React = require('react');
var Header = require('../components/Header');
var Footer = require('../components/Footer');

var MainLayout = React.createClass({
  render: function () {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

          <div className="off-canvas position-left" id="offCanvas" data-off-canvas>
            {/* Close button */}
            <button className="close-button" aria-label="Close menu" type="button" data-close>
              <span aria-hidden="true">&times;</span>
            </button>
            {/* Menu */}
            <ul className="vertical menu">
              <li><a href="#">Hearst</a></li>
              <li><a href="#">Dot</a></li>
            </ul>
          </div>

          <div className="off-canvas-content" data-off-canvas-content>
          <div className="row">
            <div className="small-12 small-centered large-10 columns">
            <div className='wrapper'>
              <Header/>
              <div className='content-wrapper'>
                {this.props.children}
              </div>
              <Footer/>
              </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = MainLayout;
