import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import CadastroCategoria from './pages/cadastro/categoria';
import CadastroVideo from './pages/cadastro/video';

function pageNotFound() {
  return (
    <div>
      <h1>Error 404: Page not Found!</h1>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={pageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
