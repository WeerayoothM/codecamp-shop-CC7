import React, { useState } from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Shopping from './pages/Shopping';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Layout from './components/Layout';
import UserContext from './context/userContext';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
        <Layout>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/shopping' component={Shopping} />
            <Route path='/cart' component={Cart} />
            <Redirect to='/home' />
          </Switch>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter >
  );
}

export default App;
