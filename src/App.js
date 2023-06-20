import React from "react";
import Header from "./components/header";
import Dtpribadi from "./components/dtpribadi";
import Sekolah from "./components/sekolah";
import Univ from "./components/univ";
import Keahlian from "./components/keahlian";
import Quote from "./components/quote";

function App() {
   return (
      <div className="container">
         <Header />
         <Dtpribadi />
         <Sekolah />
         <Univ />
         <Keahlian />
         <Quote />
      </div>
   );
}

export default App;
