const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Home } from './js/pages/app-home.jsx';
export function App() {
  return (
    <Router>
      {/*<header>
        <AppHeader/>
      </header>*/}
      <main>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>
      {/*<UserMsg/>*/}
    </Router>
  );
}
