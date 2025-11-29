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
        <table cellPadding="8">
          <tbody>
            <tr>
              <td>
                <label>Enter Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Enter Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  style={{
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </td>
            </tr>

            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                <button type="submit">Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <div style={{ marginTop: "10px" }}>
        <button onClick={checkAuthorization}>Check Authorization</button>
      </div>
    </>
  );
}
