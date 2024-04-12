import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home'
import Authorize from './views/Authorize'
import NetworkAge from './views/NetworkAge'
import PrivacyPolicy from './views/PrivacyPolicy';
import Manifesto from './views/383655';
import Blog from './views/Blog';
import Blogin from './views/Blogin';
import CreateBlogPost from './views/CreateBlogPost';
import About from './views/About';
import Build from './views/Build';
import GetInvolved from './views/GetInvolved';
import Redirect from './components/phonebook/Redirect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/age' element={<NetworkAge />} />
        <Route path='/age/:all' element={<NetworkAge />} />
        <Route path='/age/episode/:episode' element={<NetworkAge />} />

        <Route path='/about' element={<About />} />
        <Route path='/build' element={<Build />} />
        <Route path='/get-involved' element={<GetInvolved />} />

        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<Blog />} />
        <Route path='/blog/post/:slug' element={<Blog />} />
        <Route path='/blog/preview/:previewJson' element={<Blog />} />
        <Route path='/blog/login' element={<Blogin />} />
        <Route path='/blog/new' element={<CreateBlogPost />} />
        <Route path='/blog/edit/:editSlug' element={<CreateBlogPost />} />

        <Route path='/authorize' element={<Authorize />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />

        {/* REDIRECTS */}
        {/* <Route path='/ethdenver' element={<Redirect to={'https://docs.google.com/forms/d/e/1FAIpQLSdi323gUluDVHt1SDQ5wzaBGVk5rhdWSuidAA0iK_s_sCn7nA/viewform?usp=sf_link'} />} /> */}
        {/* <Route path='/waitlist' element={<Redirect to={'https://forms.gle/GGRTECQrVVV2z2ZE9'} />} /> */}
        <Route path='/claim' element={<Redirect to={''} />} />

        <Route path='/3836-c455.txt' element={<Manifesto />} />

        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
