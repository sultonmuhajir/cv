import React from "react";
import mhjr from "../assets/mhjr.jpeg";

function Header() {
   return (
      <section class="Header">
         <div class="box">
            <img src={mhjr} alt="Sulton Muhajir" />
            <h2>CURRICULUM VITAE</h2>
         </div>
      </section>
   );
}

export default Header;
