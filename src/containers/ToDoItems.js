var React = require('react');
var DisplayToDo = require('../components/DisplayToDo');

class ToDoItems extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        toggled: false
    }
    this.onClick = this.onClick.bind(this);
    this.getCounter = this.getCounter.bind(this);
  }

  onClick(index){
    this.props.items[index].completed = !this.props.items[index].completed;
    this.setState({
      toggled: !this.state.toggled
    })
  }

  getCounter(){
    var toggled = 0;
    for (let index in this.props.items){
      this.props.items[index].completed?toggled:toggled++;
    }
    return toggled;
  }

  render(){
    return(
      <div className="ToDoItems-Container">
      <table>
      <tbody>
        {this.props.items.map((item, index)=> <tr key={index} >
                                    <DisplayToDo task={item.task} />
                                    <th><button onClick={this.onClick.bind(this, index)} className={item.completed?'completed':'incomplete'}>{item.completed?'completed':'incomplete'}</button></th>
                                    </tr>)}

      </tbody>
      </table>
      <div className="counter-container">{this.getCounter()!==1?this.getCounter()+' items left':'1 item left'}
      </div>
      </div>
    )
  }

}

module.exports = ToDoItems;
