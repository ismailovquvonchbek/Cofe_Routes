import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Page/Home/Home';
import About from './Components/Page/About/About';
import Error from './Components/Page/Error/Error';

function App() {
  const [lang, setLangs] = React.useState('en')
  return (
    <>
      <Header lang={lang} setLangs={setLangs} />

      <Routes>
        <Route path='' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Error />} />

      </Routes>

      <Footer lang={lang} setLangs={setLangs} />
    </>
  );
}

export default App;
