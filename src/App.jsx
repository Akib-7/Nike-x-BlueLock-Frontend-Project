import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy load the components
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Suspense
            fallback={
              <div className="text-center mt-20">
                Loading Assets for best experience...
              </div>
            }
          >
            <Routes>
              {/* Product Page */}
              <Route path="/products" element={<Home />} />
              {/* HomePage */}
              <Route path="/" element={<About />} />
              {/* Contact Us Page */}
              <Route path="/contactUs" element={<ContactUs />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
