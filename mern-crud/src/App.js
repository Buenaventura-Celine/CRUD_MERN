import React from 'react';
import './App.css';
import Header from "./Header";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { TodoList } from './TodoList';
import { CreateTodo } from './CreateTodo';
import { EditTodo } from './EditTodo';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "'Montserrat', sans-serif",
    ].join(','),
    
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Header/>
          <Switch>
            <Route exact path ="/" component={TodoList}/>
            <Route exact path ="/edit/:id" component={EditTodo}/>
            <Route exact path ="/create" component={CreateTodo}/>
          </Switch>
        </div>
      </ThemeProvider> 
    </Router>
  );
}

export default App;
