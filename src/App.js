import React from 'react';
import Homepage from "./pages/Homepage";
import Header from './components/Header';
import Navbar from "./components/Navbar";
import Foods from "./pages/Foods";
import Footer from "./pages/Footer";
import Restaurant from './pages/Restaurant';
import Chefs from './pages/Chefs';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';

function App() {
  return (
    <div>
    <Header />
    <Homepage />
    <Foods />
    <Restaurant />
    <Chefs />
    <Menu />
    <Reservation />
    <Footer />
    </div>
  );
}

export default App;
