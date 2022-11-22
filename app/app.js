import { Candidate, Candidates } from "./components/Candidates.js";
import { Categories, Category } from "./components/Categories.js";
import { localPort, apiCandidates, apiCategories } from "./components/env.js";

const candidates = new Candidates(apiCandidates);
const categories = new Categories(apiCategories);

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const addCandidate = document.getElementById("addCandidate");

const categoryName = document.getElementById("categoryName");
const addCategory = document.getElementById("addCategory");

addCandidate.addEventListener("click", () => {
  const newCandidate = new Candidate(firstName.value, lastName.value);
  console.log(newCandidate);
  candidates.addCandidate(newCandidate);
  firstName.value = "";
  lastName.value = "";
});

addCategory.addEventListener("click", () => {
  const newCateg = new Category(categoryName.value);
  categories.addCategory(newCateg);
  categoryName.value = "";
});

window.onload = function () {
  candidates.renderCandidates();
  categories.renderCategories();
};
