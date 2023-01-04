import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home'
import Authorize from './views/Authorize'
import Podcast from './views/Podcast'
import RedirectToWaitlist from './components/phonebook/RedirectToWaitlist';
import RedirectToEthDenver from './components/phonebook/redirectToEthDenver';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/age' element={<Podcast />} />
        <Route path='/authorize' element={<Authorize />} />
        <Route path='/waitlist' element={<RedirectToWaitlist />} />
        <Route path='/ethdenver' element={<RedirectToEthDenver />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
