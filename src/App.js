import React from 'react';
import Homepage from "./pages/Homepage";
import Header from './components/Header';
import Foods from "./pages/Foods";
import Footer from "./pages/Footer";
import Restaurant from './pages/Restaurant';
import Chefs from './pages/Chefs';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Reviews from './pages/Reviews';

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
    <Reviews />
    <Footer />
    </div>
  );
}

export default App;
