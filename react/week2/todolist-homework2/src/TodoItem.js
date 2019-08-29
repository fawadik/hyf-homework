import React from "react"


class TodoItem extends React.Component {
     
    render() {
        const doneStyle = {            
            textDecoration: "line-through"
        }
        return (
            <div className="todo-item">
                <input 
                    type="checkbox"
                    checked={this.props.item.done}
                    onChange={() => this.props.handleChange(this.props.item.id)}                    
                />
                <p style={this.props.item.done ? doneStyle: null}>{this.props.item.description}</p>
            </div>
        )
    }
 
}

export default TodoItem;