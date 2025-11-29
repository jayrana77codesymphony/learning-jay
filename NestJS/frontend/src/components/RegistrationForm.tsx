import { useState } from "react";

export function RegistrationForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  async function insertUser(event: any) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          email,
          password,
          mobileNumber,
          personalDetails: {
            firstName,
            lastName,
            middleName,
            gender,
            address,
          },
          employment: {
            companyName,
            department,
            position,
            salary: Number(salary),
          },
        }),
      });

      const result = await response.json();
      alert(result.message);
      const form = document.querySelector("form")!;
      form.reset();
    } catch (error) {
      alert(`Error Occurred: ${error}`);
    }
  }

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={insertUser} method="post">
        <table cellPadding="8">
          <tbody>
            <tr>
              <td>
                <label>Enter User Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="userName"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Enter Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Enter Mobile Number:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="mobileNumber"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Enter First Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Enter Last Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Enter Middle Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="middleName"
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Gender:</label>
              </td>
              <td>
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                &nbsp;&nbsp; Female
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Address:</label>
              </td>
              <td>
                <textarea
                  className="text-area"
                  rows={3}
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Company Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="companyName"
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Department:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="department"
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Position:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="position"
                  onChange={(e) => setPosition(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Salary:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="salary"
                  onChange={(e) => setSalary(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
