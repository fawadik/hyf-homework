import React from "react"


class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <input 
                    type="checkbox"                    
                />
                <p>{this.props.item.description}</p>
            </div>
        )
    }
 
}

export default TodoItem;