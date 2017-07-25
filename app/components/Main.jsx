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
      <div>
        <div>
          <Navigation />
          <p>Main.jsx Rendered!</p>
          {props.children}
        </div>
      </div>

    </div>
  );
};

module.exports = Main;
