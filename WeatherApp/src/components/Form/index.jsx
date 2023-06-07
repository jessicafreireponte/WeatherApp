import { useState } from "react";
import PropTypes from "prop-types";

function Form({ changeLocation }) {
  const [location, setLocation] = useState("");

  function setLocationChange(e) {
    if (e.target.value !== "") {
      setLocation(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    changeLocation(location);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="¿Lugar?" type="text" onChange={setLocationChange} />
    </form>
  );
}
Form.propTypes = {
  changeLocation: PropTypes.func.isRequired,
};

export default Form;
