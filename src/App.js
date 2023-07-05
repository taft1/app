import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import News from './pages/News.jsx';
import About from './pages/About.jsx';


import './App.css';

function App() {
    return (
      <div className = 'App' class="bg-[#4c4a61] grid-rows-4">
        <BrowserRouter className="rounded-none">
        <Header />
        <Routes >
           
            <Route path="/" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="about" class="" element={<About />}/>
            
        </Routes>
        
        </BrowserRouter>
      </div>
    )

    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/home",
            element: <Home />,
          },
        ],
      },
    ],);
}

export default App;
