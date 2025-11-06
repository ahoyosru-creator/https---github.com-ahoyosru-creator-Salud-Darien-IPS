const users = {
  admin: "AdminDemo!2025",
  empleado: "EmpDemo!2025"
};

const loginForm = document.getElementById("loginForm");
const loginSection = document.getElementById("login-section");
const mainApp = document.getElementById("mainApp");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (users[username] && users[username] === password) {
    errorMsg.textContent = "";
    successMsg.textContent = `✅ Bienvenido ${username.toUpperCase()}`;
    setTimeout(() => {
      loginSection.classList.add("hidden");
      mainApp.classList.remove("hidden");
      successMsg.textContent = "";
    }, 1000);
  } else {
    errorMsg.textContent = "⚠️ Usuario o contraseña incorrectos";
    successMsg.textContent = "";
  }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  mainApp.classList.add("hidden");
  loginSection.classList.remove("hidden");
  loginForm.reset();
});

document.querySelectorAll(".sidebar li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
    item.classList.add("active");
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    const target = item.getAttribute("data-section");
    document.getElementById(target).classList.add("active");
  });
});

document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
