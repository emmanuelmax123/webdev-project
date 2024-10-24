const changeColorBtn = document.getElementById("changeColorBtn");
const div2 = document.getElementById("div2");

changeColorBtn.addEventListener("click", () => {
  // Toggle colors for both divs
  const div1 = changeColorBtn.parentElement;

  div1.classList.toggle("bg-orange-900");
  div1.classList.toggle("bg-green-500");

  div2.classList.toggle("bg-red-500");
  div2.classList.toggle("bg-yellow-900");
});
