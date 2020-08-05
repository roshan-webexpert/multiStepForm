import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });
  const [count, setCount] = useState(1);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="App">
      <h1>Step {count} of 3</h1>
      <form
        className="col-4 form"
        onSubmit={() =>
          alert(
            `Submitted Email: ${form.email} Name: ${form.name} Password: ${form.password}`
          )
        }
      >
        {count === 1
          ? ((
              <div className="form-group">
                <label>firstName</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  onChange={updateForm}
                  value={form.firstName}
                />
              </div>
            ),
            (
              <div className="form-group">
                <label>lastName</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  onChange={updateForm}
                  value={form.lastName}
                />
              </div>
            ))
          : null}
        {count === 2
          ? ((
              <div className="form-group">
                <label>email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={updateForm}
                  value={form.email}
                />
              </div>
            ),
            (
              <div className="form-group">
                <label>occupation</label>
                <input
                  type="text"
                  className="form-control"
                  name="occupation"
                  onChange={updateForm}
                  value={form.occupation}
                />
              </div>
            ))
          : null}
        {count === 3
          ? ((
              <div className="form-group">
                <label>city</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  onChange={updateForm}
                  value={form.city}
                />
              </div>
            ),
            (
              <div className="form-group">
                <label>bio</label>
                <input
                  type="text"
                  className="form-control"
                  name="bio"
                  onChange={updateForm}
                  value={form.bio}
                />
              </div>
            ))
          : null}
        {count === 3 ? (
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        ) : null}
      </form>
      <button
        className="btn btn-dark"
        type="submit"
        onClick={() => setCount(count - 1)}
        disabled={count < 2}
      >
        Back
      </button>
      <button
        className="btn btn-light"
        type="submit"
        onClick={() => setCount(count + 1)}
        disabled={count > 2}
      >
        Next
      </button>
    </div>
  );
}

export default App;
