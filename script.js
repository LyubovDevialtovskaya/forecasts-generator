function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomPrediction() {
  const randomIndex = getRandomInt(0, predictions.length - 1);
  return predictions[randomIndex];
}

function generateRandomProbability() {
  return getRandomInt(0, 100);
}

function displayCurrentForecast() {
  const randomPrediction = generateRandomPrediction();
  const randomProbability = generateRandomProbability();

  currentForecast.querySelector("h1").textContent = randomPrediction;
  currentForecast.querySelector("p").textContent = `Вероятность сбытия: ${randomProbability}%`;
}

function addForecastToList(prediction, probability) {
  const forecastItemTemplate = document.getElementById("forecast-item");
  const clone = document.importNode(forecastItemTemplate.content, true);
  clone.querySelector("h3").textContent = prediction;
  clone.querySelector("p").textContent = `Вероятность события: ${probability}%`;
  forecastsList.prepend(clone);
}

const predictions = [
  "Скоро выходные! ",
  "Ты сможешь реализовать свои планы!",
  "Случится чудо!",
  "Тебя ждёт сюрприз!",
  "Удели время себе.",
];

const forecastBtn = document.querySelector(".forecast-btn");
const currentForecast = document.querySelector(".current-forecast");
const forecastsList = document.querySelector(".forecasts");

forecastBtn.addEventListener("click", () => {
  const randomPrediction = generateRandomPrediction();
  const randomProbability = generateRandomProbability();

  displayCurrentForecast();
  addForecastToList(randomPrediction, randomProbability);
});
