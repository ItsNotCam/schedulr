import React from "react";
import helpers from "../utils/helpers.mjs";
import ScheduleView from "./ScheduleView";
import AnnouncementsView from "./AnnouncementsView";

const EmployeeHome = () => {
    const [state, setState] = React.useState({
			title: "",
			content: ""
		});

    React.useEffect(getAnnouncements, []);

    const getAnnouncements = () => {
        helpers.getAnnouncements().then(function(response) {
          setState({
            title: response.data[response.data.length -1].title,
            content: response.data[response.data.length -1].content
          });
        });
    }

		return (
				<div>
						<AnnouncementsView title={state.title} content={state.content}/>
						<ScheduleView />
				</div>
		);
}

export default EmployeeHome;