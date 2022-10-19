import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import { Home } from "./pages/home";
import Navbar from "./pages/navbar";
import Products from "./pages/products";
import Error from "./pages/error";
import SingleProduct from "./pages/singleProduct";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import React from "react";
import ProtectedRoute from "./pages/protectedRoute";
function App() {
  const [user, setUser] = React.useState(null);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<SingleProduct />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
