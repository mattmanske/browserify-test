//-----------  Requirements  -----------#

var React = require('react');

//-----------  React Componet Class  -----------#

var DeepJS = React.createClass({
  
  displayName: 'DeepJS',

  render: function(){
    return React.createElement('input', {type: 'text', placeholder: 'hello'})
  }
});

//-----------  React Componet Class  -----------#

module.exports = DeepJS;
