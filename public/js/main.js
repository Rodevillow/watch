import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import higher order components
import RequireAuth from './components/auth/authenticate.component';

// Import routing components
import {hashHistory, Router, Route, IndexRoute} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Import custom components
import App from './components/app.component';
import NotFoundPage from './components/error/not-found.component';
import LoginForm from './components/login/login.component';
// import Main from './components/main/main.component';
import MainDetail from './components/main/detail.component';
import Dashboard from './components/dashboard/dashboard.component';
import Film from './components/film/film.component';
import FilmList from './components/film/film-list.component';
import FilmForm from './components/film/film-form.component';
import FilmDetail from './components/film/film-detail.component';
import store from './store/store';
import { verifyToken } from './services/authService';

const history = syncHistoryWithStore(hashHistory, store);

// Used to log user in if token is valid
store.dispatch(verifyToken());

import MainList from './components/main/list.component';

render(
    <Provider store={store}>
        <Router  history={history}>

            <Route path="/" component={App}>
                <IndexRoute component={MainList}/>
            </Route>

            <Route path="/main" component={App}>
                <IndexRoute component={MainList}/>
                <Route path=":id/view" component={MainDetail}/>
            </Route>

            <Route path="/admin" component={LoginForm}/>

            <Route path="/dashboard" component={App}>
                <IndexRoute component={RequireAuth(Dashboard)} />
                <Route path="/films" component={RequireAuth(Film)}>
                    <IndexRoute component={FilmList}/>
                    <Route path="new" component={FilmForm}/>
                    <Route path=":id" component={FilmForm}/>
                    <Route path=":id/view" component={FilmDetail}/>
                </Route>
            </Route>

            <Route path="*" component={NotFoundPage} />
        </Router>
    </Provider>,
    document.getElementById('root-container')
);