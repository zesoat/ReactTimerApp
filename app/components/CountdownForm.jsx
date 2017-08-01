let React = require('react');

let CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    let strSeconds = this.refs.seconds.value;

    if(strSeconds.match(/^[0-9]*$/) && strSeconds != '' && strSeconds != 0){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }

  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
