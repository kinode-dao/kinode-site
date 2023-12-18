import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home'
import Authorize from './views/Authorize'
import NetworkAge from './views/NetworkAge'
import RedirectToWaitlist from './components/phonebook/RedirectToWaitlist';
import RedirectToEthDenver from './components/phonebook/redirectToEthDenver';
import PrivacyPolicy from './views/PrivacyPolicy';
import _383655 from './views/383655';
import Blog from './views/Blog';
import Blogin from './views/Blogin';
import CreateBlogPost from './views/CreateBlogPost';
import About from './views/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/age' element={<NetworkAge />} />
        <Route path='/age/:all' element={<NetworkAge />} />
        <Route path='/age/episode/:episode' element={<NetworkAge />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:all' element={<Blog />} />
        <Route path='/blog/post/:slug' element={<Blog />} />
        <Route path='/blog/login' element={<Blogin />} />
        <Route path='/blog/new' element={<CreateBlogPost />} />
        <Route path='/authorize' element={<Authorize />} />
        <Route path='/waitlist' element={<RedirectToWaitlist />} />
        <Route path='/ethdenver' element={<RedirectToEthDenver />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/3836-c455.txt' element={<_383655 />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
