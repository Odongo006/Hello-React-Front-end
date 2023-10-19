import React from 'react';
import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from './actions/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Welcome to Greetings App!</h1>} />
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
