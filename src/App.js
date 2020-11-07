import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import  {BrowserRouter} from "react-router-dom";
import  MainPage from '../src/containers/MainPage/MainPage'
import DetailPage from './containers/DetailPage/DetailPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/details" component={DetailPage} render={(props) => <DetailPage {...props} />}/>
    </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
