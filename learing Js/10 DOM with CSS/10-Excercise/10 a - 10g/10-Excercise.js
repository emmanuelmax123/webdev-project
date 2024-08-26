function clicked(button) {
  if (!button.classList.contains("sql")) {
    button.classList.add("sql");
    console.log(`${button.textContent} is active`);
  } else {
    button.classList.remove("sql");
    console.log(`${button.textContent} is no longer active`);
  }
}

function checked() {
  const button = document.querySelector("js-btn1");
  if (!button.classList.contains("sql")) {
    uncheck();
    button.classList.add("sql");
    console.log(`${button.textContent} is active`);
  } else {
    button.classList.remove("sql");
    console.log(`${button.textContent} is no longer active`);
  }
}

function uncheck() {
  const activebtn = document.querySelector("js-btn1");
  activebtn.array.forEach((button) => button.classList.remove("sql"));
}
