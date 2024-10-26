const modals = document.querySelectorAll(".modal");
const openbtn = document.querySelectorAll(".open-btn");
const closebtn = document.querySelectorAll(".close-btn");

openbtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].showModal();
  });
});

closebtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].close();
  });
});
