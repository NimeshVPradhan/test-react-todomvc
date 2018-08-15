var React = require('react');

class NewToDo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toDoItem : '',
      items : [],
      err: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    this.setState({
      toDoItem:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault();
    if(!this.state.toDoItem.trim()){
        this.setState({
          err: 'input field can not be emply'
        })
    }else{
    this.setState({
      err: '',
      items : [...this.state.Items, this.state.ToDoItem],
      toDoItem:''
    });
  }
  }

  render(){
    return(
      <div className="items-container">
      <div className="form-container">
      <form onSubmit ={this.onSubmit} className="form">
        <input value={this.state.ToDoItem} onChange = {this.onChange}/>
        <div className="err">{this.state.err}</div>
        <button>Submit</button>
      </form>
      </div>

      </div>
    )
  }

}

module.exports = NewToDo;
