import './App.css';
import Calculator from './components/Calculator';
import FetchQuote from './components/FetchQuote';

const App = () => (
  <div className="App row container d-flex align-items-center">
    <FetchQuote />
    <Calculator />
  </div>
);

export default App;
