import React, { createContext } from "react";
import "./App.css";
// pages
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Card from "./pages/Card";
import Checkouts from "./pages/Checkouts";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Details from "./pages/Details";
// hooks
import { useState, useEffect } from "react";

export const TokenContext = createContext("");
export const UserContext = createContext("");
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState(localStorage.getItem("theme"))


  useEffect(() => {
    if(localStorage.getItem("user")){ 
      setUser(JSON.parse(localStorage.getItem("user")))
    }
    if(localStorage.getItem("theme")){ 
      document.querySelector("html").setAttribute("data-theme", localStorage.getItem("theme"))
    }
  }, [])
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <TokenContext.Provider value={{ token, setToken }}>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              }
            />
            <Route
              path="/about"
              element={
                <MainLayout>
                  <About />
                </MainLayout>
              }
            />
            <Route
              path="/card"
              element={
                <MainLayout>
                  <Card />
                </MainLayout>
              }
            />
            <Route
              path="/details/:id"
              element={
                <MainLayout>
                  <Details />
                </MainLayout>
              }
            />
            <Route
              path="/products"
              element={
                <MainLayout>
                  <Products />
                </MainLayout>
              }
            />
            <Route
              path="/orders"
              element={
                <MainLayout>
                  <Orders />
                </MainLayout>
              }
            />
            <Route
              path="/checkouts"
              element={
                <MainLayout>
                  <Checkouts />
                </MainLayout>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
