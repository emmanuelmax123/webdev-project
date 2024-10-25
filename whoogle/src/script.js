const modal = document.querySelector("#modal");
const openmodal = document.querySelector(".open-btn");
const closemodal = document.querySelector(".close-btn");

openmodal.addEventListener("click", () => {
  modal.showModal();
});

closemodal.addEventListener("click", () => {
  modal.close();
});
