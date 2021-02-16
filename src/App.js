import "./assets/scss/styles.scss";
// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducer";
// page
import { Details, Home, SearchResult } from "./pages";

const rootReducer = combineReducers({
  movies: reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/search/:keyword" component={SearchResult} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
