import DetailPage from './components/DetailPage/detailPage';
import HomePage from './components/HomePage/homePage';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
