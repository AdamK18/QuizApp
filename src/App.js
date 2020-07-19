import React from 'react';
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import QuestionForm from './components/QuestionForm/QuestionForm'
import store from './redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home}></Route>
          <Route path='/questionform' component={QuestionForm}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
