import React from "react"


class TodoItem extends React.Component {

    
    render() {
   const {id, deleteButton,item} = this.props
        return (
            <div className="todo-item">
                <input 
                    type="checkbox"                    
                />
                <button onClick = {(e)=> {deleteButton(id)}} >Delete</button>
                <p>{item}</p>
            </div>
        )
    }
 
}

export default TodoItem;