import React from "react";
import helpers from "./utils/helpers.mjs";

const Employee = () => {
  const [state, setState] = React.useState({
    username: "",
    picture: "",
  });

  React.useEffect(() => {
		const getUser = async() => {
			const response = await helpers.getCurrentUser();
			if(response !== state.username) {
				setState({
					picture: response.data.picture,
					username: response.data.username
				});
			}
		}

		getUser();
  });

  return (
    <div>
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a className="black-text" href="/logout">
            Logout<i className="material-icons right">exit_to_app</i>
          </a>
        </li>
      </ul>
      <nav>
        <div className="nav-wrapper grey lighten-5">
          <a href="/employee" className="brand-logo blue-text text-darken-1">
            <img id="logo" src="/assets/images/logo.png" />
            <span className="hide-on-med-and-down">Schedulr</span>
          </a>
          <a
            href="/"
            data-activates="slide-out"
            className="button-collapse blue-text text-darken-1"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a
                className="dropdown-button black-text"
                href="#"
                data-activates="dropdown1"
                data-beloworigin="true"
                data-hover="true"
              >
                {state.username}
                <img className="circle circle-small" src={state.picture} />
              </a>
            </li>
          </ul>
          <ul id="slide-out" className="side-nav">
            <li>
              <div className="userView">
                <div className="background">
                  <img src="http://materializecss.com/images/office.jpg" />
                </div>
                <a>
                  <img className="circle" src={state.picture} />
                </a>
                <a>
                  <span className="white-text">Company Name</span>
                </a>
                <a>
                  <span className="white-text name">{state.username}</span>
                </a>
              </div>
            </li>
            <li>
              <a href="/logout" className="black-text">
                <i className="material-icons">exit_to_app</i>Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Employee;
