import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Involve from "./components/Involve";
import Gallery from "./components/Gallery";
import Tickets from "./components/Tickets";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "involve":
        return <Involve />;
      case "gallery":
        return <Gallery />;
      case "tickets":
        return <Tickets />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentScreen={currentScreen} setScreen={setCurrentScreen} />
      
      <main className="grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
