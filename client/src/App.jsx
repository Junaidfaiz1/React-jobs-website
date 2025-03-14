import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Poster = lazy(() => import("./Components/Poster"));
const Navbar = lazy(() => import("./Components/Navbar"));
const CreateJob = lazy(() => import("./Components/CreateJob"));
const Home = lazy(() => import("./Pages/Home.jsx"));
const Footer = lazy(() => import("./Components/footer.jsx"));

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Poster />
      <Home />
      <Footer/>
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/createjob" element={<CreateJob />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
