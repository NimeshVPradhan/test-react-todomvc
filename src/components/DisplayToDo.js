var React = require('react');

class DisplayToDo extends React.Component{

  render(){
    return(
        <th className="task">{this.props.task}<input className="distroy" type="button" value="Update" /></th>
    )
  }

}

module.exports = DisplayToDo;
