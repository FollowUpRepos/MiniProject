import { useState } from "react";
import "./CSS/AddContact.css";

const AddContact = (props) => {
  console.log("props:", props);
  const [userdata, setUserData] = useState({ name: "", email: "" });
  const { addContactHandler } = props;
  console.log("props-addContactHandler:", props.addContactHandler);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userdata.name === "" || userdata.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler(userdata);
    setUserData({ name: "", email: "" });
  };

  return (
    <div className="ml-4">
      <h2>Add Contact</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label className="block mt-4">Name</label>
          <input
            className="border-solid border-2 w-9/12 "
            type="text"
            name="name"
            placeholder="Name"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label className="block mt-4">Email</label>
          <input
            className="mb-4 border-solid border-2 w-9/12"
            type="email"
            name="email"
            placeholder="Email"
            onChange={changeHandler}
          />
        </div>
        <button className="  bg-cyan-700 py-1 px-4 font-bold text-white rounded-lg mb-4">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
