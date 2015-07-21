#-----------  Requirements  -----------#

React = require('react')

#-----------  React Componet Class  -----------#

DeepCoffee = React.createClass
  
  displayName: 'DeepCoffee'

  render: ->
    return (
      '<input type="text" placeholder="hello />'
    )

#-----------  React Componet Class  -----------#

module.exports = DeepCoffee