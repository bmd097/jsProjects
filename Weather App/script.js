let input = document.getElementById("input");
let info = document.querySelector(".info");
let key = "de854500093529";
document.querySelector("button").addEventListener("click", () => {
  weatherFind();
});
// {"coord":{"lon":86.72,"lat":21.93},
// "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
// "base":"stations",
// "main":{"temp":296.13,"feels_like":294.35,"temp_min":296.13,"temp_max":296.13,"pressure":1013,"humidity":39,"sea_level":1013,"grnd_level":1009},"visibility":10000,"wind":{"speed":1.98,"deg":13},"clouds":{"all":100},"dt":1606215698,"sys":{"country":"IN","sunrise":1606177858,"sunset":1606217346},"timezone":19800,"id":1276942,"name":"Baripāda","cod":200}

function weatherFind() {
  if (input.value === "") return;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`
  )
    .then((response) => response.text())
    .then((data) => {
      let res = JSON.parse(data);
      info.innerText = "";
      let ele = document.createElement("p");
      ele.innerText = input.value.toUpperCase();
      info.appendChild(ele);
      let ele1 = document.createElement("p");
      if (res["weather"] !== undefined)
        ele1.innerText = `${res["weather"][0]["main"]}, ${res["weather"][0]["description"]}`;
      info.appendChild(ele1);
      let ele2 = document.createElement("p");
      if (res["main"] !== undefined)
        ele2.innerText = `${res["main"]["temp"]} F`;
      info.appendChild(ele2);
      input.value = "";
      if (res["cod"] === "404") {
        info.innerText = "NOT FOUND";
      }
    });
}

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") weatherFind();
});
