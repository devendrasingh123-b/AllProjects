import { auth, db } from "./Firebase-Config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { doc, getDoc, setDoc, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  let loginBtn = document.getElementById("login-btn");
  let signupBtn = document.getElementById("signup-btn");

  if (signupBtn) {
    signupBtn.addEventListener("click", async () => {
      let email = document.getElementById("signup-email").value;
      let password = document.getElementById("signup-password").value;
      let role = document.getElementById("role").value;

      try {
        let res = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "users", res.user.uid), {
          "gmail": email,
          "role": role
        });

        window.location.href = "../index.html";

      } catch (error) {
        document.getElementById("signup-message").innerText = error.message;
      }
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      let email = document.getElementById("login-email").value;
      let password = document.getElementById("login-password").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "html/dashboard.html";

      } catch (error) {
        document.getElementById("login-message").innerText = error.message;
      }
    });
  }

  // ✅ Handle form submit only when user state is ready
  onAuthStateChanged(auth, (user) => {
    const form = document.getElementById("plant-form");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!user) {
          document.getElementById("message").innerText = "Please log in first!";
          return;
        }

        const plantName = document.getElementById("plantName").value;
        const wateringSchedule = document.getElementById("wateringSchedule").value;
        const sunlightRequirement = document.getElementById("sunlightRequirement").value;
        const soilType = document.getElementById("soilType").value;
        const notes = document.getElementById("notes").value;

        try {
          await addDoc(collection(db, "users", user.uid, "plants"), {
            plantName,
            wateringSchedule,
            sunlightRequirement,
            soilType,
            notes,
            createdAt: serverTimestamp()
          });

          document.getElementById("message").innerText = "Plant added successfully!";
          form.reset();
        } catch (err) {
          console.error("Error adding plant: ", err);
          document.getElementById("message").innerText = "Error adding plant!";
        }
      });
    }
  });




   

});
