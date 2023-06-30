import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

 import Home from './pages/Home.jsx';
 import News from './pages/News.jsx';
 import About from './pages/About.jsx';
 import Error from './pages/Error.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
      <div className = 'App' class="bg-[#4c4a61]">
        <BrowserRouter className="rounded-none">
        <Header />
        <Routes className="">
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </div>
    )
}

export default App;
