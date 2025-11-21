import { useState } from "react";

export function RegistrationForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  async function insertUser(event: any) {
    event.preventDefault();
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email, password, mobileNumber }),
    })
      .then(() => {
        alert("User Inserted Successfull");
      })
      .catch((error) => alert(`Error Occur ${error}`));
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={insertUser} method="post">
        <label>Enter User Name: </label>
        <input
          type="text"
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <br />
        <label>Enter Email: </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Enter Password: </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label>Enter Mobile Number: </label>
        <input
          type="password"
          name="mobileNumber"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
