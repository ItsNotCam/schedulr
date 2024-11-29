import React from "react";
import helpers from "../utils/helpers.mjs";
import ScheduleView from "./ScheduleView";
import AnnouncementsBuild from "./AnnouncementsBuild";
import AnnouncementsView from "./AnnouncementsView";

const ManagerHome = () => {
  const [state, setState] = React.useState({
    title: "",
    content: "",
  });

  React.useEffect(getAnnouncements, []);

  const getAnnouncements = () => {
    const get = async () => {
      const response = await helpers.getAnnouncements();
      setState({
        title: response.data[response.data.length - 1].title,
        content: response.data[response.data.length - 1].content,
      });
    };

    get();
  };

  return (
    <div>
      <ScheduleView />
      <div className="row">
        <div className="col m6">
          <AnnouncementsView title={state.title} content={state.content} />
        </div>
        <div className="col m6">
          <AnnouncementsBuild />
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;
