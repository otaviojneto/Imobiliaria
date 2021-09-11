import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index.js';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <GlobalStyle />
    <Routes />
  </Router>
);

export default App;
