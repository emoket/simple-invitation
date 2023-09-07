import './App.css';
import Home from './components/Home';
import About from './components/About';
import Photo from './components/Photo';
import Location from './components/Location';

const App = () => {
  return (
    <>
      <main className='main'>
        <Home />
        <About />
        <Photo />
        <Location />
      </main>
    </>
  );
};

export default App;
