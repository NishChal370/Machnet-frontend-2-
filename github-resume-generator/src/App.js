import Page404 from './components/404Page/page404';
import HomePage from './components/HomePage/homePage';
import DetailPage from './components/DetailPage/detailPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/detail"  component={DetailPage}/>
          <Route component={Page404}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
