import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
             title: ''
        }
    }

    onChangeHandler = e => this.setState({[e.target.name]: e.target.value})
    
    onSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }
    render() {
        const {title} = this.state
        return (
        <div>
        <form onSubmit={this.onSubmit} style={{display: "flex"}}>
            <input
            type="text" 
            name="title" 
            style={{flex: "10", padding: "5px"}}
            placeholder="Add Todo ..."   
            value={title}  
            onChange={this.onChangeHandler}     
            />
            <input
            type="submit" 
            value="Submit"
            className="btn"
            style={{flex: "1"}}
            />
        </form>
    </div>
        )
    }
}

export default AddTodo
