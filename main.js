const title = document.querySelector('.title');
const redButton = document.querySelector('.red-color');
const defaultButton = document.querySelector('.default');
const greenButton = document.querySelector('.green-color');
const titleDefaultColor = '#000';

redButton.addEventListener('click', function() {
    title.style.color = 'red';
});
defaultButton.addEventListener('click', function () {
    title.style.color = titleDefaultColor;
});
greenButton.addEventListener('click', function () {
    title.style.color = 'green';
});