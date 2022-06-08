import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./About";
import Blog from "./Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
