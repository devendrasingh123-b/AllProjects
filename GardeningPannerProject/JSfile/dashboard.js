import { navbarData } from "./index.js";

import { auth, signOut,getDoc } from "./Firebase-Config.js";
import { setupNavbar } from "./menu.js";


document.getElementById("navbar-all").innerHTML=navbarData
setupNavbar()
// window.addEventListener("DOMContentLoaded",()=>{

//     document.getElementById("navbar-all").innerHTML=navbarData


//       const toggle = document.getElementById('menu-toggle');
//     const nav = document.getElementById('main-nav');

//     toggle.addEventListener('click', () => {
//       nav.classList.toggle('active');
//     });




    
//    let logOut=document.getElementById("logout")



//     if(logOut){
        
//         logOut.addEventListener("click",async ()=>{
            
//             console.log("hi")
//                   try {
                    
//                     await  signOut(auth)
//                     window.location.href="../index.html"

//                   } catch (error) {
//                     alert("someting is worng")

//                   }
//         })
//     }






// })



// ye jo hai is se deshboard par trees dikhte hai



import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { onAuthStateChanged } from "./Firebase-Config.js";
import {  db } from "./Firebase-Config.js";

// Wait until DOM loads
document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is logged in
      const plantsRef = collection(db, "users", user.uid, "plants");
      
      // Real-time listener
      onSnapshot(plantsRef, (snapshot) => {
        const plantList = document.getElementById("plant-list");
        plantList.innerHTML = ""; // Clear old data
        
        snapshot.forEach((doc) => {
          const data = doc.data();
          
          // Create a card or div
          const plantCard = document.createElement("div");
          plantCard.classList.add("plant-card");
          
          plantCard.innerHTML = `
            <h3>${data.plantName}</h3>
            <p><strong>Water:</strong> ${data.wateringSchedule}</p>
            <p><strong>Sunlight:</strong> ${data.sunlightRequirement}</p>
            <p><strong>Soil:</strong> ${data.soilType}</p>
            <p><strong>Notes:</strong> ${data.notes}</p>
            <button onclick="deletePlant('${doc.id}')">Delete</button>
             
          `;
          
          plantList.appendChild(plantCard);
        });
      });
    } else {
      // Not logged in
      document.getElementById("plant-list").innerHTML = "<p>Please log in to see your plants.</p>";
    }
  });
});


import { doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

window.deletePlant = async function(plantId) {
  const user = auth.currentUser;
  if (!user) {
    alert("Please log in first!");
    return;
  }

  const plantDocRef = doc(db, "users", user.uid, "plants", plantId);
  await deleteDoc(plantDocRef);
  alert("Plant deleted!");
}





import { foter } from "./footer.js";

document.getElementById("footer-div").innerHTML=foter
