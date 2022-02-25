
import './App.css';
import Home from './components/home/Home';


import About from './components/about';
// import Home from './components/home/Home'
import Navbar from './components/Navbar';
import Supliers from './components/Supliers';
import Products from './components/Products';

const App = () => (

  <div className="App">
    <div className="gradient__bg">
      <Navbar />
  </div>
  <Home/>
  <About/>
  <Supliers/>
  <Products/>
  </div>
  );


export default App;
