import './css/reset.css';
import './css/App.css';
import './css/common.css';
import Header from './Header';
import Footer from './Footer';
import Home from './components/Home';
import Favorite from './components/Favorite';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; // https://reactrouter.com/web/example/no-match

// 읽어보기 https://yoogomja.github.io/2020/04/29/reactjs-nested-route-404/
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorite" component={Favorite} />
          <Route path="*" component={NotFound} />
        </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
