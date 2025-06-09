import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/Header";
import AddLead from "./components/AddLead";

function App() {
  return (
    <>
      <Header />

      <AddLead />
    </>
  );
}

export default App;
