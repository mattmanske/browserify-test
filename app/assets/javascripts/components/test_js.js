//-----------  Requirements  -----------#

var React = require('react');

//-----------  React Componet Class  -----------#

var ShallowJS = React.createClass({
  
  displayName: 'ShallowJS',

  render: function(){
    return (
      <input type="text" placeholder="hello" />
    );
  }
});

//-----------  React Componet Class  -----------#

module.exports = ShallowJS;
