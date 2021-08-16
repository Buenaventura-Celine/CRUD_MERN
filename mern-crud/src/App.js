import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { TodoList } from './TodoList';
import { CreateTodo } from './CreateTodo';
import { EditTodo } from './EditTodo';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="info" variant="dark">
        <Container>
        <Navbar.Brand href="/">TODO</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="justify-content-end">
          <Nav.Link href="/">List</Nav.Link>
          <Nav.Link href="/create">Create Todo</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path ="/" component={TodoList}/>
        <Route exact path ="/edit/:id" component={EditTodo}/>
        <Route exact path ="/create" component={CreateTodo}/>
      </Switch>
    </div>
  );
}

export default App;
