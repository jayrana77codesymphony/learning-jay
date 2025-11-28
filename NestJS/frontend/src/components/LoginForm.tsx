import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function validateData(event: any) {
    event.preventDefault();

    const oldToken = localStorage.getItem("token_" + email);

    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, token: oldToken }),
    });

    const result = await response.json();

    if (result.token) {
      localStorage.setItem("token_" + email, result.token);
      alert(result.message);
    } else {
      alert("Login Failed: " + result.message);
    }
  }

  async function checkAuthorization() {
    const token = localStorage.getItem("token_" + email);

    const response = await fetch("http://localhost:3000/users/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    if (response.ok) {
      alert("User is Authorized");
    } else {
      alert("User NOT Authorized: " + result.message);
    }
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={validateData}>
        <label>Enter Email: </label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <label>Enter Password: </label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button>Login</button>
      </form>
      <button onClick={checkAuthorization}>Check Authorization</button>
    </>
  );
}
