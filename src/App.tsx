import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import ContinentsList from "./screens/ContinentsList";
import CountriesList from "./screens/CountriesList";
import CountryDetail from "./screens/CountryDetail";

function App() {
  return (
    <>
      <main className="container pb-8 bg-cream">
        <Routes>
          <Route path="/" element={<ContinentsList />} />
          <Route path="/:id" element={<CountriesList />} />
          <Route path="/:id/country/:id" element={<CountryDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
