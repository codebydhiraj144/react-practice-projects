import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    UserName: "",
    Password:""
  });

  let handleInputChange = (event) => {


    setFormData((currData) => {
      return {
        ...currData,
        [event.target.name]: event.target.value
      };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      fullName: "",
      UserName: "",
password:""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        placeholder="enter fullname"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        name="fullName"
      />

      <br /><br />

      <label htmlFor="username">User Name</label>
      <input
        id="username"
        placeholder="enter username"
        type="text"
        value={formData.UserName}
        onChange={handleInputChange}
        name="UserName"

        
      />

        
      <br /><br />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        placeholder="enter password"
        type="text"
        value={formData.password}
        onChange={handleInputChange}
        name="password"

        
      />

      <br />

      <button
        type="submit"
        style={{ border: "2px solid red", marginTop: "10px" }}
      >
        Submit
      </button>
    </form>
  );
}
