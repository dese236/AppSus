const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Home } from './js/pages/Home.jsx';
import { KeepApp } from './js/apps/keep/pages/KeepApp.jsx';
import { MailApp } from './js/apps/mail/page/EmailApp.jsx';
import { AppHeader } from './js/cmps/AppHeader.jsx';
import { BookApp } from './js/apps/Book/page/BookApp.jsx';
import { OpenEmail } from './js/apps/mail/page/OpenEmail.jsx';
//import { NewMail } from './js/apps/mail/page/NewMail.jsx';
export function App() {
  return (
    <Router>
      <header>
        <AppHeader/>
      </header>
      <main>
        <Switch>
          <Route path="/mail/details/:emailId" component={OpenEmail} />
          <Route path="/mail" component={MailApp} />
          <Route path="/keep" component={KeepApp} />
          <Route path="/book" component={BookApp} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      {/*<UserMsg/>*/}
    </Router>
  );
}
