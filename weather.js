const form = document.getElementById("weatherForm");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const apiKey ="66d45eb2e50a89d7872fb824b921214a";
const resultDiv = document.getElementById("weatherResult");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    let lat = latitude.value;
    let lon = longitude.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ja`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const description = data.weather[0].description;
    const temp = data.main.temp;

    resultDiv.innerHTML = `天気:${description}<br>気温:${temp}℃`;
});