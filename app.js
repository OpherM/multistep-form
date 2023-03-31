const number = document.querySelectorAll(".number");
const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".butn");
let currentPage = 1;

function navigatePage(newPage) {
  // hide all pages
  pages.forEach((page) => {
    page.style.display = "none";
  });

  pages[newPage - 1].style.display = "block";
  currentPage = newPage;

  updatePage();
}

function updatePage() {
  pages.forEach((page, index) => {
    page.classList[index < currentPage ? "add" : "remove"]("active");
  });

  // show or hide prevBtn and nextBtn based on current page number
  const prevBtn = document.querySelector(`#prev-${currentPage}`);
  const nextBtn = document.querySelector(`#next-${currentPage}`);

  if (prevBtn) {
    prevBtn.style.display = currentPage === 1 ? "none" : "block";
  }

  if (nextBtn) {
    nextBtn.style.display = currentPage === pages.length ? "none" : "block";
  }
}

function nextPage() {
  if (currentPage === 4) {
    navigatePage(5);
  } else {
    const steps = [stepOne, stepTwo, stepThree, stepFour];
    const index = currentPage - 1;

    if (index < steps.length) {
      steps[index].click();
    }

    currentPage += 1;

    navigatePage(currentPage);
  }
}

function prevPage() {
  currentPage -= 1;

  navigatePage(currentPage);
}

const stepOne = document.querySelector(".number1"),
  stepTwo = document.querySelector(".number2"),
  stepThree = document.querySelector(".number3"),
  stepFour = document.querySelector(".number4"),
  pageFive = document.getElementById("page-5"),
  confirmBtn = document.querySelector(".confirm");

stepOne.addEventListener("click", () => {
  navigatePage(1);
});
stepTwo.addEventListener("click", () => {
  navigatePage(2);
});
stepThree.addEventListener("click", () => {
  navigatePage(3);
});
stepFour.addEventListener("click", () => {
  navigatePage(4);
});
confirmBtn.addEventListener("click", () => {
  navigatePage(5);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const page = parseInt(button.dataset.page, 10);
    navigatePage(page);
  });
});

updatePage();
