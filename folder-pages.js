const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const cards = Array.from(document.querySelectorAll(".collection-card"));
let activeFilter = "all";

function applyFilter() {
  const query = (searchInput.value || "").toLocaleLowerCase("ko-KR");
  cards.forEach((card) => {
    const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesQuery = card.textContent.toLocaleLowerCase("ko-KR").includes(query);
    card.hidden = !(matchesFilter && matchesQuery);
  });
}

searchInput.addEventListener("input", applyFilter);
filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  filters.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
  applyFilter();
});