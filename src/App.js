import React from 'react';
import Homepage from "./pages/Homepage";
import Header from './components/Header';
import Navbar from "./components/Navbar";
import Foods from "./pages/Foods";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
    <Header />
    <Homepage />
    <Foods />
    <Footer />
   
    </div>
  );
}

export default App;
