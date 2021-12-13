import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "../About";
import Statistics from "../Statistics";
import Home from "../Home";
import Header from "../Header";

import { GlobalStyle, Wrapper } from "./styles";
import { Component } from "react";
import { open } from "../../utils/indexdb";
import Settings from "../Settings";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    open()
      .then(() => {
        this.setState({
          loading: false,
        });
      })
      .catch(() => {
        console.error("Помилка");
      });
  }
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <Router>
        <Wrapper>
          <GlobalStyle />

          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
