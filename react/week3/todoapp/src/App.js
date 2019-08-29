import React from "react"
import TodoItem from "./TodoItem"


class App extends React.Component {
  state = {
          todos: [],
          timeCounter: 0
      };
  componentDidMount() {
      this.timer = setInterval(() => {
        this.setState({ timeCounter: this.state.timeCounter + 1 }); 
      }, 1000);

      fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
      .then(res => res.json())
      .then(data => this.setState({todos: data}, 
      () => console.log(data)));
  }
 // componentWillUnmount() {
   // clearInterval(this.timer);
  //}
  addTodoItem = () => {
    let randomID = (Math.random() * 10).toFixed(9)
    let newRandomItem = {
                          id: randomID,
                          description: "Random Item",
                          done: false
                        }
    const newTodoList = this.state.todos.concat(newRandomItem);
    this.setState({todos: newTodoList});
    
  } 
 deleteItem = (id) => {
  
  }
  render() {      
      const todoItems = this.state.todos.map(item => <TodoItem name = {this.state.todo} id={item.id} deleteButton = {this.deleteItem} key={item.id} item={item.description}/>)
     
      console.log("TCL: App -> render -> todoItems", todoItems)
      return (
          <div className="todo-list">            
              <p>Time Spent on this web {this.state.timeCounter} seconds</p>
              {todoItems}
              <button className="addItem" onClick ={this.addTodoItem} >Add Random Item</button>
          </div>
         
      );    
  }
}

export default App;
