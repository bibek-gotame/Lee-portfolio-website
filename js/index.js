/*==================== MENU SHOW  HIDDEN ====================*/
const navMenu = document.getElementById("menu"),
  navDeskMenu = document.querySelector(".desktop-menu"),
  navToggle1 = document.getElementById("nav__toggle-1"),
  navToggle2 = document.getElementById("nav__toggle-2"),
  li = document.getElementsByClassName("li")


/*===== MENU SHOW =====*/
/* Validate if constant exists */


let flag = 0;  // Use `let` for variables that might be reassigned

// Register a single event listener outside the `if` statement
navToggle1.addEventListener("click", () => {
  if (flag == 0) {
    navMenu.classList.add('show-menu');
    flag = 1;
  } else {
    navMenu.classList.remove('show-menu');
    flag = 0;
  }
});

// desktop-menuu

navToggle2.addEventListener("click", () => {
  // console.log("worikng-1")
  if (flag == 0) {
    console.log("worikng-1")
    animation();
    navDeskMenu.classList.add('display');
    flag = 1;
  } else {
    // console.log("is-remove")
    // animation2();
    navDeskMenu.classList.remove('display');
    flag = 0;
  }
  console.log(flag)
});



for (const button of li) {
  button.addEventListener("click", () => {
    navMenu.classList.remove('show-menu');
  });
}






