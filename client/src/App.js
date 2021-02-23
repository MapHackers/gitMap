import React, { Component } from 'react'
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Footer from './components/views/Footer/Footer'
import MapInfo from './components/views/MapInfoPage/MapInfo'
import CategoryPage from './components/views/CategoryPage/CategoryPage'
import RepositoryPage from './components/views/RepositoryPage/RepositoryPage'
import MyPage from './components/views/MyPage/MyPage'
import Auth from './hoc/auth'
import { Suspense } from 'react';

    /* 
    option
    null => 아무나 출입이 가능한 페이지
    true => 로그인한 유저만 출입이 가능한 페이지
    false => 로그인한 유저는 출입 불가능한 페이지

    adminRoute
    true => admin만!
    */

export class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={(<div> Loading ... </div>)}>
          <div style={{ minHeight: 'clac(100vh - 80px)' }}>
            <Switch>
              <Route exact path="/" component={Auth(LoginPage, null, false)} />
              <Route exact path="/main" component={Auth(LandingPage, null)} />
              <Route exact path="/register" component={Auth(RegisterPage, false)} />
              <Route exact path="/mapinfo/:mapId" component={Auth(MapInfo, null)} />
              <Route exact path="/category/:categoryId" component={Auth(CategoryPage, null)} />
              <Route exact path="/:userId/repository/:repositoryId" component={Auth(RepositoryPage, null)} />
              <Route exact path="/:userId" component={Auth(MyPage, null)} />
            </Switch>
          </div>
          <Footer />
        </Suspense>
      </div>
    )
  }
}

export default App
