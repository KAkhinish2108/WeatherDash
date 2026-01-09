import { useState } from "react";

const API_KEY = "85825b41e4d2bbe49b60bd39e7e4e8c2";

export default function Dashboard() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const json = await res.json();
    setData(json);
  };

  const getLocalTime = () => {
    if (!data) return "";
    const localTime = new Date(
      (data.dt + data.timezone) * 1000
    );
    return localTime.toUTCString();
  };

  return (
    <div className="dashboard">
      <h2>Weather & Timezone Dashboard</h2>

      <input
        placeholder="Enter city (e.g. Bengaluru, Milan)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {data && data.main && (
        <div className="card">
          <h3>{data.name}, {data.sys.country}</h3>
          <p>🌡 Temperature: {data.main.temp} °C</p>
          <p>💧 Humidity: {data.main.humidity}%</p>
          <p>💨 Wind: {data.wind.speed} m/s</p>
          <p>🌤 Weather: {data.weather[0].description}</p>
          <p>🕒 Local Time: {getLocalTime()}</p>
        </div>
      )}
    </div>
  );
}
