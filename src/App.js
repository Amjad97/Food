import React, { useRef, createContext } from "react";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Delivery from "./components/Delivery/Delivery";
import Gallary from "./components/Gallery/Gallery";
import HappyHours from "./components/HappyHours/HappyHours";
import Testimonials from "./components/Testimonials/Testimonials";
import Features from "./components/Features/Features";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export const RefsContext = createContext();

function App() {
  const menuRef = useRef();
  const gallaryRef = useRef();
  const testimonialsRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <RefsContext.Provider
        value={{
          menuRef: menuRef,
          gallaryRef: gallaryRef,
          testimonialsRef: testimonialsRef,
          contactRef: contactRef
        }}
      >
        <Home />
      </RefsContext.Provider>
      <div ref={menuRef}>
        <Menu />
      </div>
      <Delivery />
      <div ref={gallaryRef}>
        <Gallary />
      </div>
      <HappyHours />
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <Features />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
