import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import TransformPage from "./pages/TransformPage";
import DownloadPage from "./pages/DownloadPage";
import MyAccountPage from "./pages/MyAccountPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/transform" element={<TransformPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/account" element={<MyAccountPage />} />
        {/* Placeholder for remaining links */}
        <Route path="/about" element={<div>About</div>} />
        <Route path="/help" element={<div>Ajuda</div>} />
        <Route path="/contact" element={<div>Contato</div>} />
        <Route path="/terms" element={<div>Termos de Uso</div>} />
        <Route path="/privacy" element={<div>Privacidade</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
