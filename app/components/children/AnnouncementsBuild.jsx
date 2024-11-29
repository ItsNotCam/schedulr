import React from "react";
import helpers from "../utils/helpers.mjs";

const AnnouncementsBuild = () => {
  const [state, setState] = React.useState({
    title: "",
    content: "",
  });

  const handleAnnouncementBuild = (event) => {
    setState({ [event.target.id]: event.target.value });
  };

  const addAnnouncements = (event) => {
    event.preventDefault(event);
    helpers
      .addAnnouncements(state.title, state.content)
      .then(function (response) {
        clearStates();
      });
    Materialize.toast("Announcement added", 3000);
    clearForm();
  };

  const clearForm = () => {
    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
      elements[i].value = "";
      elements[i].classList.remove("valid");
    }
  };

  const clearStates = () => {
    setState({ title: "", content: "" });
  };

  return (
    <div className="card-panel">
      <div className="row">
        <div className="col s12">
          <h5>Make an announcement</h5>
        </div>
      </div>
      <form onSubmit={addAnnouncements}>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Title"
              id="title"
              type="text"
              className="validate"
              value={state.title}
              onChange={handleAnnouncementBuild}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              placeholder="Announcement"
              id="content"
              type="text"
              className="materialize-textarea"
              value={state.content}
              onChange={handleAnnouncementBuild}
              required
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button
              className="btn waves-effect waves-light btn-large green accent-3 loginButtons"
              type="submit"
              value="Submit"
              name="action"
            >
              Submit<i className="material-icons right">add</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AnnouncementsBuild;
