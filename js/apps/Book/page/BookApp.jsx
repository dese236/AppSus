// const Router = ReactRouterDOM.HashRouter;
const { Route } = ReactRouterDOM;

// import { BookApp } from "./pages/BookApp.jsx";
import { BookDetails } from "./BookDetails.jsx";
import { HomeBook } from "./HomeBook.jsx";
import { BookAppHeader } from "../cmps/BookAppHeader.jsx";
import { SearchBook } from "./SearchBook.jsx";
import { About } from "./About.jsx";
import { AddReview } from "../cmps/AddReview.jsx"
import { UserMsg } from "../../mail/cmps/UserMsg.jsx";
import { BookMain } from "./BookMain.jsx";


// Simple React Component
export function BookApp() {

  return (
    // <Router>
    // <React.Fragment>
    <section>

      <header>
        <BookAppHeader />
      </header>
      <section className="app">
        {/* <Switch> */}

        <Route path="/book/details/:bookId" component={BookDetails} />
        <Route path="/book/add/:bookId" component={AddReview} />
        <Route path="/book/search" component={SearchBook} />
        <Route path="/book/about" component={About} />
        <Route path="/book/home" axact component={HomeBook} />
        <Route exact path="/book" component={BookMain} />
        {/* </Switch> */}
      </section>
      <UserMsg />
    </section>


    /* </React.Fragment> */
    /* </Router> */
  );
}
