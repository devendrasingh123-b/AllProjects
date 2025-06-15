
window.addEventListener("DOMContentLoaded",()=>{

// let val=prompt("plase Enter you city name")

async function fetchWeather() {
  const apiKey = "b0beac5d27cd2d9b7ad777f882ee6597";  // यहाँ अपनी API key लगाओ
  const city = "indore"  // अपनी city डालो
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const temp = data.main.temp;
    const condition = data.weather[0].main;

    let tip = "";
    if (condition === "Rain") {
      tip = "आज बारिश हो रही है। पौधों को पानी देने की ज़रूरत नहीं।";
    } else if (temp > 35) {
      tip = "बहुत गर्मी है। पौधों को धूप से बचाओ।";
    } else if (temp < 5) {
      tip = "बहुत ठंड है। पौधों को frost से बचाओ।";
    } else {
      tip = "मौसम ठीक है। सामान्य देखभाल करो।";
    }

    document.getElementById("weather-info").innerHTML =
      `🌡 Temp: ${temp}°C | Condition: ${condition}<br>🌱 Tip: ${tip}`;

  } catch (err) {
    console.error("Weather fetch error", err);
    document.getElementById("weather-info").innerText = "Weather info not available.";
  }
}

// Page load पर weather दिखाओ
fetchWeather();


})

