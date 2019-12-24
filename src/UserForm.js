import React from "react";
import useForm from "./lib/useForm";

const UserForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };
  const [inputs, handleChange, resetForm] = useForm(initialState);
  function onSave(e) {
    e.preventDefault();
    resetForm(initialState);
  }
  return (
    <>
      <form onSubmit={onSave}>
        <label htmlFor="firstName">
          Name:
          <input
            type="text"
            name="firstName"
            placeholder="enter your name"
            value={inputs.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="lastName">
          LastName:
          <input
            type="text"
            name="lastName"
            placeholder="enter your last name"
            value={inputs.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="occupation">
          Occupation:
          <input
            type="text"
            name="occupation"
            placeholder="enter your occupation"
            value={inputs.occupation}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="city">
          City:
          <input
            type="text"
            name="city"
            placeholder="enter your location"
            value={inputs.city}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="bio">
          BIo:
          <input
            type="text"
            name="bio"
            placeholder="enter your name"
            value={inputs.bio}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>
        If I'm right, your first name is {inputs.firstName}, you live in{" "}
        {inputs.city} and finally, your bio {inputs.bio}
      </h2>
    </>
  );
};

export default UserForm;
