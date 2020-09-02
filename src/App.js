import React, { Component } from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';


import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then( res => this.setState({todos: res.data}))
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        } return todo;
      })
    })
}

deleteTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({
    todos: [...this.state.todos.filter(todo =>  todo.id !== id)]
  }))
}
   
addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })

  .then(res => this.setState({ todos: [...this.state.todos, res.data]}) )

}

  render() {
    const {todos} = this.state
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          {/* <Route exact path="/" render={props => (
            <React.Fragment>
               
            </React.Fragment>
          )} /> */}
           <AddTodo addTodo={this.addTodo}/>
                <Todo todos={todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
          {/* <Route path="/about" component={About} />     */}
        </div>
      </div>
    )
  }
}

export default App
