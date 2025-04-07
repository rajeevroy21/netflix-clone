import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import Browse from "./components/Browse";

const App = () => (
  <BrowserRouter>  
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
);

export default App;
