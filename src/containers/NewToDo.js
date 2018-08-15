var React = require('react');
var ToDoItems = require('./ToDoItems');

class NewToDo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ToDoItem : '',
      Items : [],
      err: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    this.setState({
      ToDoItem:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault();
    if(!this.state.ToDoItem.trim()){
        this.setState({
          err: 'input field can not be emply'
        })
    }else{
    var itemList = this.state.Items;
    var i = itemList.length==0?1:itemList[itemList.length-1].index+1;
    var item = {
      index: i,
      task : this.state.ToDoItem,
      completed : false
    }
    this.setState({
      err: '',
      Items : [...this.state.Items, item],
      ToDoItem:''
    });
  }
  }

  render(){
    return(
      <div className="task-container">
      <form onSubmit ={this.onSubmit} className="Form">
        <input value={this.state.ToDoItem} onChange = {this.onChange}/>
        <div className="err">{this.state.err}</div>
        <button>Submit</button>
      </form>
      <ToDoItems items={this.state.Items} />
      </div>
    )
  }

}

module.exports = NewToDo;
