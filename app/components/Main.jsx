let React = require('react');
let Navigation = require('Navigation');

// let Main = React.createClass({
//   render: function() {
//       return (
//         <div>
//           <Nav />
//           <h2>Main Components</h2>
//           {this.props.children}
//         </div>
//       );
//   }
// });

let Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>

    </div>
  );
};

module.exports = Main;
