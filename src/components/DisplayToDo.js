var React = require('react');

class DisplayToDo extends React.Component{

  render(){
    return(
        <th className="task">
          <div className={this.props.task.completed?'completed':'incomplete'}>{this.props.task.task}</div>
          <input className="distroy" type="button" value="Update" />
        </th>
    )
  }

}

module.exports = DisplayToDo;
