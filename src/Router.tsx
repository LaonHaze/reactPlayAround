import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Counter from "./Features/Counter";
import Messages from "./Features/Messages";

export default function WebRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route exact path="/" render={() => <Redirect to="/counter" />} />
      </Switch>
    </BrowserRouter>
  );
}
