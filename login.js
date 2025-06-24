window.addEventListener("DOMContentLoaded", () => {
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  });

  signupTab.addEventListener("click", () => {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  });

  const searchBox = document.getElementById("search-box");
  searchBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      alert(`Searching: ${searchBox.value}`);
    }
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login submitted!");
    loginForm.reset();
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Signup submitted!");
    signupForm.reset();
  });
});
