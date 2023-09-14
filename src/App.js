import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
