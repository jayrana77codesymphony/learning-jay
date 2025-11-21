import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function validateData(event: any) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    const findUser = data.find( (user: any) => user.email == email && user.password == password );
    if (findUser) alert("Login Successfull!");
    else alert("Login Failed...!");
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
    </>
  );
}
