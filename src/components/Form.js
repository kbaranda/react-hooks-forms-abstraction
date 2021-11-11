import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  })

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value,
    });
  }

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      name="firstName"
      onChange={handleFirstNameChange}
      value={formData.firstName}
      />
      <input type="text"
      name="lastName"
      onChange={handleLastNameChange}
      value={formData.lastName}
      />
      <input
      type="checkbox"
      name="admin"
      onChange={handleChange}
      checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
