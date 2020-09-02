import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


class Todo extends React.Component {
    
   

      render() {
        const {todos, markComplete, deleteTodo} = this.props

        return  todos.map(todo =>  (
               <TodoItem key={todo.id} todo={todo}  markComplete={markComplete} deleteTodo={deleteTodo}/>
        ))
    }
}


//PropTypes
Todo.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todo
