const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");
const noResultMessage = document.querySelector(".no-result-message");
console.log(noResultMessage);

let currentFilters = {
  season: "all",
  edible: "all",
};

seasonFilter.addEventListener("change", updateFilter);

edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilters[filterType] = e.target.value;
  filterCards();
}

function filterCards() {
  let shownCard = 0;
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    // console.log(season, edible);
    const matchesSeason = season === currentFilters.season;
    const matchesEdible = edible === currentFilters.edible;

    if (
      (matchesSeason || currentFilters.season === "all") &&
      (matchesEdible || currentFilters.edible === "all")
    ) {
      card.hidden = false;
      shownCard++;
    } else {
      card.hidden = true;
    }
  });
  if (shownCard) {
    noResultMessage.hidden = true;
  } else {
    noResultMessage.hidden = false;
  }
}
