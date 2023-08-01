import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home'
import Authorize from './views/Authorize'
import NetworkAge from './views/NetworkAge'
import RedirectToWaitlist from './components/phonebook/RedirectToWaitlist';
import RedirectToEthDenver from './components/phonebook/redirectToEthDenver';
import Pokur from './views/Pokur';
import Ignite from './views/Ignite';
import PrivacyPolicy from './views/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/age' element={<NetworkAge />} />
        <Route path='/authorize' element={<Authorize />} />
        <Route path='/waitlist' element={<RedirectToWaitlist />} />
        <Route path='/ethdenver' element={<RedirectToEthDenver />} />
        <Route path='/pokur' element={<Pokur />} />
        <Route path='/ignite' element={<Ignite />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
