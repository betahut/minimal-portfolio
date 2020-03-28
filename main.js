const searchBox = document.querySelector('.search-box');
const navBtnContainer = document.querySelector('.nav-btn-container');
const searchBtn = document.querySelector('.search-btn');
const closeBtn = document.querySelector('.close-btn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchBox.classList.add('active');
    navBtnContainer.classList.add('active');
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchBox.classList.remove('active');
    navBtnContainer.classList.remove('active');
});