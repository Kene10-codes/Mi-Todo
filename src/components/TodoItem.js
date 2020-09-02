import React from 'react'
import PropTypes from 'prop-types'


const buttonStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


class TodoItem extends React.Component {
    getStyle  = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo  
        return (
            <div style={this.getStyle()}>
               
                <p>  
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> { '  '}
                    { title }
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={buttonStyle}>Delete</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
