import PropTypes from "prop-types";

function WeatherInfo({ weather }) {
  return (
    <section>
      <h1>{weather?.location?.name}</h1>
      <h2>{weather?.location?.country}</h2>
      <section className="info">
        <figure>
          <img src={`http:${weather?.current?.condition?.icon}`} width="128" />
        </figure>
        <figcaption>
          <p>{weather?.current?.condition.text}</p>
          <p>{weather?.current?.temp_c}º</p>
        </figcaption>
      </section>
      {/* <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </section>
  );
}

WeatherInfo.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string,
      country: PropTypes.string,
    }),
    current: PropTypes.shape({
      condition: PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
      }),
      temp_c: PropTypes.number,
    }),
  }),
};

export default WeatherInfo;
