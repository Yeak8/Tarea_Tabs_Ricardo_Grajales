const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((content) => (content.style.display = "none"));

    tab.classList.add("active");
    const target = document.getElementById(tab.dataset.tab);
    if (target) target.style.display = "flex";
  });
});
