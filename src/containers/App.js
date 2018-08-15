var React = require('react');
var Header = require('../components/Header');
var NewToDo = require('./NewToDo');

class App extends React.Component{
  render(){
    return (
      <div>
          <Header />
          <NewToDo />
      </div>
    )
  }
}

module.exports = App;
