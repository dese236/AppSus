const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Home } from './js/pages/Home.jsx';
import { AppHeader } from './js/cmps/AppHeader.jsx';
export function App() {
  return (
    <Router>
      <header>
        <AppHeader/>
      </header>
      <main>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>
      {/*<UserMsg/>*/}
    </Router>
  );
}
