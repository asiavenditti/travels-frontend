import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SingleCardPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/city/:id" element={<SinglePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
