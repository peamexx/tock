import './css/reset.css';
import './css/App.css';
import './css/common.css';
import Header from './Header';
import Footer from './Footer';
import Home from './components/Home';
import Favorite from './components/Favorite';
import StockEod from './components/StockEod';
import Board from './components/Board';
import NotFound from './components/NotFound';
import BoardPost from './components/BoardPost';
import Search from './components/Search';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router basename="/tock"> 
        <div className="App">
          <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/favorite" component={Favorite} />
              <Route path="/stock=105467" component={StockEod} />
              <Route path="/board" component={Board} />
              <Route path="/no=24290" component={BoardPost} />
              <Route path="/search" component={Search} />
              <Route path="*" component={NotFound} />
            </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
