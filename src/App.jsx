import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar />
      <Home />
      <About />
      <News />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
