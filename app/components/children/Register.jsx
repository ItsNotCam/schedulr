import axios from "axios";
import React from "react";

const Register = () => {
	const [state, setState] = React.useState({
		username: "",
		password: "",
		userType: "",
		passwordConfirmation: "",
		error: ""
	});

	const handleUserChange = (event) => {
		console.log("Something changed:",event.target.name,"-",event.target.value);
		setState((oldState) => ({ 
			...oldState,
			[event.target.name]: event.target.value 
		}));
	}

	const handleRegister = async (event) => {
		event.preventDefault();

		console.log("registering");
		const userData = {
			username: state.username,
			password: state.password,
			passwordConfirmation: state.passwordConfirmation,
			userType: document.querySelector("select").value
		};

		if (!userData.username || !userData.password || !userData.passwordConfirmation || !userData.userType) {
			console.log("missing fields", userData);
			return;
		}

		try {
			console.log(userData);
			await axios.post("/register", userData);
			window.location.replace("/");
		} catch(e) {
			setState(oldState => ({ ...oldState, error: e.responseText}));
		}
	}

	return (
		<div className="container">
			<div className="row" id="loginForm">
				<div className="col m6 offset-m3">
					<div className="card-panel">
						<div className="row grey lighten-5">
							<div className="col s12 center">
								<h4 className="blue-text text-darken-1">Register</h4>
								<h4> {state.error}</h4>
							</div>
						</div>
						<form action="/register" method="POST" onSubmit={handleRegister}>
							<div className="row">
								<div className="col s12">
									<input
										placeholder="Username"
										type="text"
										className="validate"
										value={state.username}
										name="username"
										onChange={handleUserChange}
										required />
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
										required />
								</div>
							</div>
							<div className="row">
								<div className="col s12">
									<input
										placeholder="Confirm Password"
										type="password"
										className="validate"
										value={state.passwordConfirmation}
										name="passwordConfirmation"
										onChange={handleUserChange}
										required />
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<select name="userType">
										<option defaultValue="" disabled selected>Select User Type</option>
										<option value="employee">Employee</option>
										<option value="manager">Manager</option>
									</select>
								</div>
							</div>
							<div className="row">
								<div className="col s12">
									<button className="btn waves-effect waves-light btn-large blue accent-3 loginButtons" type="submit" value="Submit" name="action">Register<i className="material-icons right">person_add</i></button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Register;
