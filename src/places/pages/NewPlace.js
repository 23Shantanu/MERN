import React, { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceForm.css";

const NewPlace = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(title, description, address); // send this to the backend!
  };
  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    }
  };

  return (
    <form className={`place-form form-control`} onSubmit={placeSubmitHandler}>
      <label htmlFor={"title"}>{"Title"}</label>
      <input
        id="title"
        element="input"
        name="title"
        type="text"
        label="Title"
        onChange={handleChange}
        value={title}
      />
      <br />
      <label htmlFor="description">{"Description"}</label>
      <input
        id="description"
        type="textarea"
        name="description"
        label="Description"
        onChange={handleChange}
        value={description}
      />
      <br />
      <label htmlFor="address">{"Address"}</label>
      <input
        id="address"
        type="textarea"
        name="address"
        label="Address"
        onChange={handleChange}
        value={address}
      />
      <Button type="submit" disabled={false}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
