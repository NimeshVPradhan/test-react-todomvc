var React = require('react');
var DisplayToDo = require('../components/DisplayToDo');

class ToDoItems extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toggled: {},
      counter:0
    }
    this.onClick = this.onClick.bind(this);
    this.getCounter = this.getCounter.bind(this);
  }

  onClick(index){
    //console.log(this.state)
    var toggled = this.state.toggled;
    toggled[index] = !toggled[index];
    this.setState({
      toggled: toggled
      })
  }

  getCounter(){
    var toggled = this.state.toggled;
    var t=this.props.items.length;
    var count=0;
    for(let x in toggled){
      toggled[x]?count++:count;
    }
    return t-count;
  }

  render(){
    return(
      <div className="ToDoItems-Container">
      <table>
      <tbody>
        {this.props.items.map((item, index)=> <tr key={index}  className={this.state.toggled[index]?'active':'inactive'}>
                                    <DisplayToDo item={item}/>
                                    <th><button onClick={this.onClick.bind(this, index)}>{this.state.toggled[index]?'completed':'incomplete'}</button></th>
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
