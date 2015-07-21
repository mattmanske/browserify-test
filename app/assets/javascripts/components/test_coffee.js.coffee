#-----------  Requirements  -----------#

React = require('react')

#-----------  React Componet Class  -----------#

ShallowCoffee = React.createClass
  
  displayName: 'ShallowCoffee'

  render: ->
    return (
      '<input type="text" placeholder="hello />'
    )

#-----------  React Componet Class  -----------#

module.exports = ShallowCoffee