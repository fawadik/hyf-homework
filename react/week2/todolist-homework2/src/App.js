import React from "react"
import ReactDom from "react-dom"
import TodoItem from "./TodoItem"
import todos from "./todolist"

class App extends React.Component {
  state = {
          todos: todos,
          timeCounter: 0
      };
  componentDidMount() {
      this.timer = setInterval(() => {
        this.setState({ timeCounter: this.state.timeCounter + 1 }); 
      }, 1000);
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
  render() {      
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
      
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
