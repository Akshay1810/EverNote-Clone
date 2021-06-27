import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import Home from './components/home/Home';
import Favorites from './components/notes/Favorites';
import NotesDetail from './components/notes/NotesDetail';
import EditForm from './components/notes/EditForm';
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/favorites' component={Favorites}/>
        <Route path='/note/:id' component={NotesDetail}/>
        <Route path="/editform/:id" component={EditForm}/>
      </Switch>
    </Router>
  );
}

export default App;
