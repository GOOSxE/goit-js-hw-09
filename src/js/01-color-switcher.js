// *
const startButtonUrl = document.querySelector('button[data-start]');
const stopButtonUrl = document.querySelector('button[data-stop]');
const bodyUrl = document.querySelector('body');
// ? Посилання
let isIntervalActive = false;
let intervalId = 0;
// *
startButtonUrl.addEventListener('click', () => {
  if (isIntervalActive) {
    return;
  }
  onStartButtonClick();
});

// *
stopButtonUrl.addEventListener('click', onStopButtonBtn);
function onStartButtonClick() {
  intervalId = setInterval(() => {
    bodyUrl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  isIntervalActive = true;
}
function onStopButtonBtn() {
  clearInterval(intervalId);
  isIntervalActive = false;
}
// todo // Стилі кнопок
startButtonUrl.classList.add('body__start-btn');
stopButtonUrl.classList.add('body__stop-btn');
// ? // Отримання кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
