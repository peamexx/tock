import './reset.css';
import './App.css';
import './common.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
// import { Bar } from 'react-chartjs-2';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
