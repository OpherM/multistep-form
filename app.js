const number = document.querySelectorAll('.number');
const pages = document.querySelectorAll('.page');
const buttons = document.querySelectorAll('.butn');

// for (i of btn) {
//     i.addEventListener('click', pressMe);
// }

// function pressMe() {
//     console.log('pressed');
// }

let currentPage = 1;

const updatePage = (e) => {
    currentPage = e.target.id === 'next' ? ++currentPage : --currentPage;
    // console.log(currentPage);

    pages.forEach((page, index) => {
        // page.classList[`${index < currentStep ? 'add' : 'remove'}`]('active');
        console.log(pages);
    });
};

buttons.forEach(butn => {
    butn.addEventListener('click', updatePage);
});

const stepOne = document.querySelector('.number1'),
      stepTwo = document.querySelector('.number2'),
      stepThree = document.querySelector('.number3'),
      stepFour = document.querySelector('.number4'),
      pageFive = document.getElementById('page-5'),
      nextBtn = document.querySelector('.btn-2'),
      backBtn = document.querySelector('btn-1'),
      confirmBtn = document.querySelector('.confirm');

stepOne.addEventListener('click', oneStep);
stepTwo.addEventListener('click', twoStep);
stepThree.addEventListener('click', threeStep);
stepFour.addEventListener('click', fourStep);
nextBtn.addEventListener('click', goNext);
backBtn.addEventListener('click', goBack);
confirmBtn.addEventListener('click', pageConfirm);

function oneStep() {
    document.getElementById('page-1').style.display = 'block';
    document.getElementById('page-2').style.display = 'none';
    document.getElementById('page-3').style.display = 'none';
    document.getElementById('page-4').style.display = 'none';
    stepOne.classList.add('active');
    stepTwo.classList.remove('active');
    stepThree.classList.remove('active');
    stepFour.classList.remove('active');
}

function twoStep() {
    document.getElementById('page-1').style.display = 'none';
    document.getElementById('page-2').style.display = 'block';
    document.getElementById('page-3').style.display = 'none';
    document.getElementById('page-4').style.display = 'none';
    stepTwo.classList.add('active');
    stepOne.classList.remove('active');
    stepThree.classList.remove('active');
    stepFour.classList.remove('active');
}

function threeStep() {
    document.getElementById('page-1').style.display = 'none';
    document.getElementById('page-2').style.display = 'none';
    document.getElementById('page-3').style.display = 'block';
    document.getElementById('page-4').style.display = 'none';
    stepThree.classList.add('active');
    stepOne.classList.remove('active');
    stepTwo.classList.remove('active');
    stepFour.classList.remove('active');
}

function fourStep() {
    document.getElementById('page-1').style.display = 'none';
    document.getElementById('page-2').style.display = 'none';
    document.getElementById('page-3').style.display = 'none';
    document.getElementById('page-4').style.display = 'block';
    stepFour.classList.add('active');
    stepOne.classList.remove('active');
    stepTwo.classList.remove('active');
    stepThree.classList.remove('active');
}   

