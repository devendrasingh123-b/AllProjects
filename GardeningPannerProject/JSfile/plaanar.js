// import { navbarData } from "./index.js";

// document.getElementById("header-div").innerHTML = navbarData;

import { navbarData } from "./index.js";
import { setupNavbar } from "./menu.js";

document.getElementById("header-div").innerHTML = navbarData;
setupNavbar();  // Navbar event listener को call करो


