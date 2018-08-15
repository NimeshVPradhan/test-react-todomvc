var React = require('react');
var Header = require('../components/Header');
var NewToDo = require('./NewToDo');
require('../styles/app.scss');

class App extends React.Component{
  render(){
    return (
      <div className="main-container">
          <Header />
          <NewToDo />
      </div>
    )
  }
}

module.exports = App;
