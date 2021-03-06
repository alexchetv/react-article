/**
* @jsx React.DOM
*/
var React = require('react'),
    GenderSwitcher = require('root/Common/widgets/GenderSwitcher/views/GenderSwitcher.jsx');
var PassengerInfo = React.createClass({
  propTypes: {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    gender: React.PropTypes.string
  },

  handleChange: function (e) {
    var target = e.target,
        name = target.name,
        value = target.value;

    this.props.onChange(name, value);
  },

  handleGender: function (type) {
    this.props.onChange('gender', type);
  },

  render: function () {
    return (
      <div>
        <span >
        <label>Имя</label>
        <input onChange={this.handleChange} 
               type="text" 
               name="firstName" 
               value={this.props.firstName} />
        </span>
        <span >
        <label>Фамилия</label>
        <input onChange={this.handleChange} 
               type="text" name="lastName" 
               value={this.props.lastName} />
        </span>
        <div className="controls">
          <GenderSwitcher onChange={this.handleGender} 
                          gender={this.props.gender} />
        </div>
      </div>
    );
  }
});
module.exports = PassengerInfo;