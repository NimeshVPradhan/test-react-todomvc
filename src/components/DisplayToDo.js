var React = require('react');

class DisplayToDo extends React.Component{

  render(){
    return(
        <th className="task-list">{this.props.item}<input className="distroy" type="button" value="Update" /></th>
    )
  }

}

module.exports = DisplayToDo;
