import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home'
import Podcast from './views/Podcast'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/networkage' element={<Podcast />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
