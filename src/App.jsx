import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PromoCode from "./components/PromoCode";
import AddTutorial from "./components/siswa/AddTutorial";
import Tutorial from "./components/siswa/Tutorial";
import TutorialsList from "./components/siswa/TutorialsList";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import "./App.css";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/tutorials" className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TutorialsList />} />
          <Route path="/tutorials" element={<TutorialsList />} />
          <Route path="/add" element={<AddTutorial />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
        </Routes>
      </div>
    </div>
    // <div className="mx-auto max-w-[450px]">
    //   <div className="h-full bg-gray-50">
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="/about" element={<About />}></Route>
    //       <Route path="/profile" element={<Profile />}></Route>
    //       <Route path="/promo-code" element={<PromoCode />}></Route>
    //     </Routes>
    //     <Footer />
    //   </div>
    // </div>
  );
}
