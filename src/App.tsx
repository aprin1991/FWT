import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";

const Home = lazy(() => import("./pages/home"));
const Hero = lazy(() => import("./pages/hero"));
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div></div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/hero/:id"
            element={
              <Suspense fallback={<div></div>}>
                <Hero />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
