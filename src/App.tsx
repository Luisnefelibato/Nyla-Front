import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import Fase1Page from './pages/fase1/Fase1Page';
import Fase2Page from './pages/fase2/Fase2Page';
import Fase3Page from './pages/fase3/Fase3Page';
import Fase4Page from './pages/fase4/Fase4Page';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fase1" element={<Fase1Page />} />
        <Route path="/fase2" element={<Fase2Page />} />
        <Route path="/fase3" element={<Fase3Page />} />
        <Route path="/fase4" element={<Fase4Page />} />
      </Routes>
    </Layout>
  );
};

export default App;
