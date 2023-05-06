// *
const startButtonUrl = document.querySelector('button[data-start]');
const stopButtonUrl = document.querySelector('button[data-stop]');
const bodyUrl = document.querySelector('body');
// ? Посилання

let isActive = false;
startButtonUrl.addEventListener('click', () => {
  if (!isActive) {
    intervalId = setInterval(() => {
      bodyUrl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    isActive = true;
    return intervalId
  }
});

stopButtonUrl.addEventListener('click', onStopButtonBtn);

function onStopButtonBtn() {
  clearInterval(intervalId);
  isActive = false;
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
