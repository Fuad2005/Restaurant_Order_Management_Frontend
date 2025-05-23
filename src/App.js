import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import TableMenuPage from './pages/tables/TableMenuPage';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import KitchenPage from './pages/KitchenPage';
import WaiterPage from './pages/WaiterPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/tables/:id" element={<TableMenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/b86f6df847644f00aa82f285c2173e70" element={<KitchenPage />} />
          <Route path="/11d772dff79c4d7cbaff6e3fa491a478" element={<WaiterPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
