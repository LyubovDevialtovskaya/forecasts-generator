
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

    const randomIndex = getRandomInt(0, predictions.length - 1);
    const randomPrediction = predictions[randomIndex];
    const randomProbability = getRandomInt(0, 100);
  

    currentForecast.querySelector("h1").textContent = randomPrediction;
    currentForecast.querySelector("p").textContent = `Вероятность сбытия: ${randomProbability}%`;
  
    const forecastItemTemplate = document.getElementById("forecast-item");
    const clone = document.importNode(forecastItemTemplate.content, true);
    clone.querySelector("h3").textContent = randomPrediction;
    clone.querySelector("p").textContent = `Вероятность сбытия: ${randomProbability}%`;
    forecastsList.prepend(clone);
  });
  
