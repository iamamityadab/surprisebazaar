window.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("search-box");
  searchBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      alert(`Searching in Blog: ${searchBox.value}`);
    }
  });
});