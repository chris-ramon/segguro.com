import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home/Home";
import PageAbout from "./Pages/PageAbout/PageAbout";
import PageServices from "./Pages/PageServices/PageServices";
import PageCourses from "./Pages/Courses/PageCourses";
import ScrollToTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/nosotros" element={<PageAbout />} />
            <Route path="/servicios" element={<PageServices />} />
            <Route path="/cursos" element={<PageCourses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
