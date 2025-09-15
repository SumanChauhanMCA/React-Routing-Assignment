import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Userinfo from './Components/Userinfo';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/nav' element={<Navbar />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/userinfo' element={<Userinfo />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>

    </div>
  );
}

export default App;
