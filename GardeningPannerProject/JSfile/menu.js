export function setupNavbar() {
  // Hamburger menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Logout functionality
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      import("./Firebase-Config.js").then(({ auth }) => {
        import("https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js").then(({ signOut }) => {
          signOut(auth).then(() => {
            window.location.href = "../index.html";
          }).catch((error) => {
            console.error("Logout error:", error);
          });
        });
      });
    });
  }
}
