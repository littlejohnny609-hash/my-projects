// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Menu Tabs
const tabs = document.querySelectorAll(".menu-tab");
const items = document.querySelectorAll(".menu-item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.tab;

    items.forEach(item => {
      item.style.display =
        item.dataset.category === category ? "flex" : "none";
    });

  });
});