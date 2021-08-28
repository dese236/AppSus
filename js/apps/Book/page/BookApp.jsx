const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

//import { BookApp } from "./pages/BookApp.jsx";
import { BookDetails } from "./BookDetails";
import { HomeBook } from "./HomeBook.jsx";
import { AppHeader } from "../cmps/AppHeader.jsx";
import { SearchBook } from "./SearchBook.jsx";
import { About } from "./About.jsx";
import { AddReview} from "../cmps/AddReview.jsx"
import { UserMsg } from "../../mail/cmps/UserMsg.jsx";
import { BookMain } from "./BookMain.jsx";


// Simple React Component
export function BookApp() {
  return (
    <Router>
      <header>
        <AppHeader/>
      </header>
      <section className="app">
        <Switch>
          <Route path="/book/add/:bookId" component={AddReview} />
          <Route path="/book/search/" component={SearchBook} />
          <Route path="/book/:bookId" component={BookDetails} />
          <Route path="/book/about" component={About} />
          <Route path="/book/home" component={HomeBook} />
          <Route path="/book" component={BookMain} />
        </Switch>
      </section>
      <UserMsg/>
    </Router>
  );
}
