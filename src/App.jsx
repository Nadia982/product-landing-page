import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className = "container">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
