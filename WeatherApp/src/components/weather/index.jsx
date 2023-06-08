import { useState } from "react";
import Form from "../Form";
import WeatherInfo from "../weatherInfo";
import Loading from "../Loading";

function Weather() {
  const [weather, setWeather] = useState(null);

  async function loadingInfo(city = "Lugo") {
    try {
      const request = await fetch(
        // `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
        `http://api.weatherapi.com/v1/current.json?aqi=no&key=db7d07d1c7e54204bcc205912230706&q=${city}`
      );
      const json = await request.json();

      setTimeout(() => {
        setWeather({ ...json }, 8000);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function handleChangeLocation(city) {
    setWeather(null);
    loadingInfo(city);
  }

  return (
    <main
      className={`${weather?.current?.temp_c <= 20 && "frio"} ${
        weather?.current?.temp_c > 20 && "calor"
      }`}
    >
      <section>
        <Form changeLocation={handleChangeLocation} />
        {/* Ahora voy a utilizar un ternario en el cuál,
      si no obtengo la información del tiempo, que 
      esté cargando */}
        {weather ? <WeatherInfo weather={weather} /> : <Loading />}
      </section>
    </main>
  );
}
export default Weather;
