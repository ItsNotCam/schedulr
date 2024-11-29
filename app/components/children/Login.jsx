import axios from "axios";
import React from "react";

const Login = () => {
  const [state, setState] = React.useState({
    username: "",
    password: "",
  });

  const handleUserChange = (event) => {
		console.log("Something changed:", event.target.name, "-", event.target.value);
    setState({ [event.target.name]: event.target.value });
  };

	const handleLogin = (event) => {
		event.preventDefault();
		console.log("logging in");

		axios.post("/login", {
			username: state.username,
			password: state.password,
		})
		.then(() => {
			window.location.replace("/");
		}).catch((err) => {
			console.log(err);
		});
	}

  return (
    <div className="container">
      <div className="row" id="loginForm">
        <div className="col m6 offset-m3 s12">
          <div className="card-panel">
            <div className="row grey lighten-5">
              <div className="col s12 center">
                <h4 className="blue-text text-darken-1">
                  <img id="logo" src="/assets/images/logo.png" />
                  <span className="hide-on-med-and-down">Schedulr</span>
                </h4>
              </div>
            </div>
            <form action="/login" method="POST" onSubmit={handleLogin}>
              <div className="row">
                <div className="col s12">
                  <input
                    placeholder="Username"
                    type="text"
                    className="validate"
                    value={state.username}
                    name="username"
                    onChange={handleUserChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <input
                    placeholder="Password"
                    type="password"
                    className="validate"
                    value={state.password}
                    name="password"
                    onChange={handleUserChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button
                    className="btn waves-effect waves-light btn-large blue accent-3 loginButtons"
                    type="submit"
                    value="Submit"
                    name="action"
                  >
                    Login<i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
              <div className="divider"></div>
              <div className="row">
                <div className="col s12">
                  <h6 id="noAccount">Don't have an account?</h6>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <a
                    className="btn waves-effect waves-light btn-large green accent-3 loginButtons"
                    href="/register"
                  >
                    Register<i className="material-icons right">person_add</i>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
