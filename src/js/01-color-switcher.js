// *
const startButtonUrl = document.querySelector('button[data-start]');
const stopButtonUrl = document.querySelector('button[data-stop]');
const bodyUrl = document.querySelector('body');
// ? Посилання
let isIntervalActive = false;

startButtonUrl.addEventListener('click', () => {
  if (!isIntervalActive) {
    bgColorIntervalSetter();
  }
});
function bgColorIntervalSetter() {
  intervalId = setInterval(() => {
    bodyUrl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  isIntervalActive = true;
}

stopButtonUrl.addEventListener('click', onStopButtonBtn);
function onStopButtonBtn() {
  clearInterval(intervalId);
  isIntervalActive = false;
}
// todo // Стилі кнопок
startButtonUrl.classList.add('body__start-btn');
stopButtonUrl.classList.add('body__stop-btn');
// * // Отримання кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
