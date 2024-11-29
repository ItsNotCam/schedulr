import React from "react";
import helpers from "../utils/helpers.mjs";

const ManagerSchedulesCreate = () => {
	const [state, setState] = React.useState({
		firstName: "",
		lastName: "",
		monday: "",
		tuesday: "",
		wednesday: "",
		thursday: "",
		friday: "",
		saturday: "",
		sunday: "",
		selectedEmpId: "",
		selectedEmpSchedule: "",
		empSchedules: [],
	});

	React.useEffect(() => {
		const getSchedules = async () => {
			const response = await helpers.getEmpSchedules();
			if(response !== state.empSchedules){
				setState({ empSchedules: response.data });
			}
		}
		getSchedules();
	}, [])

	handleUserChange = (index, event) => {
		let updatedEmpSchedules = state.empSchedules.map((empSchedule, j) => {
			if (index === j) {
				//index is the index of the currently selected employee
				empSchedule[event.target.name] = event.target.value;
				setState({ selectedEmpSchedule: empSchedule });
				setState({ selectedEmpId: empSchedule._id });
			}
			return empSchedule;
		});

		setState({ empSchedules: updatedEmpSchedules });
	}

	handleUpdateEmpSchedule = async (i) => {
		var saveButtonBlue = document.getElementById(event);
		saveButtonBlue.innerHTML = "Add";
		saveButtonBlue.className = "btn btn-small waves-effect waves-light green accent-3";

		if (state.selectedEmpSchedule !== "") {
			const response = await helpers.updateEmpSchedule(state.selectedEmpSchedule)
			const empName = state.selectedEmpSchedule.firstName + " " + state.selectedEmpSchedule.lastName + "'s ";
			Materialize.toast(empName + "schedule updated", 2000);
			clearStates();
		}
	}

	handleClearEmpSchedule = (i) => {
		event.preventDefault();

		setState((oldSate) => {
			let updatedEmpSchedules = oldSate.empSchedules.map((empSchedule, j) => {
				if (i === j) {
					var saveButton = document.getElementById(i);
					saveButton.innerHTML = "save";
					saveButton.className = "btn btn-small waves-effect waves-light blue accent-3";

					empSchedule.monday = "";
					empSchedule.tuesday = "";
					empSchedule.wednesday = "";
					empSchedule.thursday = "";
					empSchedule.friday = "";
					empSchedule.saturday = "";
					empSchedule.sunday = "";
					state.selectedEmpSchedule = empSchedule;
				}
				return empSchedule;
			});

			return { empSchedules: updatedEmpSchedules }
		});
	}

	clearStates = () => {
		setState({ firstName: "", lastName: "", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "", emp_id: "", selectedEmpSchedule: "", selectedEmpId: "" });
	}

	return (
		<div className="row">
			<div className="col m12" >
				<div className="section">
					<h5>Schedule Editor</h5>

					<table className="highlight">
						<thead>
							<tr>
								<th data-field="name">Name</th>
								<th data-field="name">Mon</th>
								<th data-field="name">Tues</th>
								<th data-field="name">Wed</th>
								<th data-field="name">Thurs</th>
								<th data-field="name">Fri</th>
								<th data-field="name">Sat</th>
								<th data-field="name">Sun</th>
							</tr>
						</thead>
						<tbody>
							{state.empSchedules.map(function (schedules, i) {
								return (
									<tr key={i}>
										<td className="fullName" id={state.empSchedules[i]._id}>
											{schedules.firstName} {schedules.lastName}
										</td>
										<td className="">
											<div className="input-field schedule">
												<select className="browser-default" name="monday" value={schedules.monday} onChange={(event) => handleUserChange(i, event)}>
													<option value=""></option>
													<option value="8am-5pm">8am-5pm</option>
													<option value="9am-6pm">9am-6pm</option>
													<option value="10am-7pm">10am-7pm</option>
													<option value="11am-8pm">11am-8pm</option>
													<option value="12pm-9pm">12pm-9pm</option>
													<option value="1pm-10pm">1pm-10pm</option>
													<option value="2pm-11pm">2pm-11pm</option>
													<option value="3pm-12am">3pm-12am</option>
												</select>
											</div>
										</td>
										<td>
											<div className="input-field schedule">
												<select className="browser-default" name="tuesday" value={schedules.tuesday} onChange={(event) => handleUserChange(i, event)}>
													<option value=""></option>
													<option value="8am-5pm">8am-5pm</option>
													<option value="9am-6pm">9am-6pm</option>
													<option value="10am-7pm">10am-7pm</option>
													<option value="11am-8pm">11am-8pm</option>
													<option value="12pm-9pm">12pm-9pm</option>
													<option value="1pm-10pm">1pm-10pm</option>
													<option value="2pm-11pm">2pm-11pm</option>
													<option value="3pm-12am">3pm-12am</option>
												</select>
											</div>
										</td>
										<td>
											<div className="input-field schedule">
												<select className="browser-default" name="wednesday" value={schedules.wednesday} onChange={(event) => handleUserChange(i, event)}>
													<option value=""></option>
													<option value="8am-5pm">8am-5pm</option>
													<option value="9am-6pm">9am-6pm</option>
													<option value="10am-7pm">10am-7pm</option>
													<option value="11am-8pm">11am-8pm</option>
													<option value="12pm-9pm">12pm-9pm</option>
													<option value="1pm-10pm">1pm-10pm</option>
													<option value="2pm-11pm">2pm-11pm</option>
													<option value="3pm-12am">3pm-12am</option>
												</select>
											</div>
										</td>
										<td>
											<div className="input-field schedule">
												<select className="browser-default" name="thursday" value={schedules.thursday} onChange={(event) => handleUserChange(i, event)}>
													<option value=""></option>
													<option value="8am-5pm">8am-5pm</option>
													<option value="9am-6pm">9am-6pm</option>
													<option value="10am-7pm">10am-7pm</option>
													<option value="11am-8pm">11am-8pm</option>
													<option value="12pm-9pm">12pm-9pm</option>
													<option value="1pm-10pm">1pm-10pm</option>
													<option value="2pm-11pm">2pm-11pm</option>
													<option value="3pm-12am">3pm-12am</option>
												</select>
											</div>
										</td>
										<td>
											<div className="input-field schedule">
												<select className="browser-default" name="friday" value={schedules.friday} onChange={(event) => handleUserChange(i, event)}>
													<option value=""></option>
													<option value="8am-5pm">8am-5pm</option>
													<option value="9am-6pm">9am-6pm</option>
													<option value="10am-7pm">10am-7pm</option>
													<option value="11am-8pm">11am-8pm</option>
													<option value="12pm-9pm">12pm-9pm</option>
													<option value="1pm-10pm">1pm-10pm</option>
													<option value="2pm-11pm">2pm-11pm</option>
													<option value="3pm-12am">3pm-12am</option>
												</select>
											</div>
										</td>
										<td>
											<div className="input-field schedule">
												<select className="browser-default" name="saturday" value={schedules.saturday} onChange={(event) => handleUserChange(i, event)}>
													<option value=""></option>
													<option value="8am-5pm">8am-5pm</option>
													<option value="9am-6pm">9am-6pm</option>
													<option value="10am-7pm">10am-7pm</option>
													<option value="11am-8pm">11am-8pm</option>
													<option value="12pm-9pm">12pm-9pm</option>
													<option value="1pm-10pm">1pm-10pm</option>
													<option value="2pm-11pm">2pm-11pm</option>
													<option value="3pm-12am">3pm-12am</option>
												</select>
											</div>
										</td>
										<td>
											<div className="input-field schedule">
												<select className="browser-default" name="sunday" value={schedules.sunday} onChange={(event) => handleUserChange(i, event)}>
													<option value=""></option>
													<option value="8am-5pm">8am-5pm</option>
													<option value="9am-6pm">9am-6pm</option>
													<option value="10am-7pm">10am-7pm</option>
													<option value="11am-8pm">11am-8pm</option>
													<option value="12pm-9pm">12pm-9pm</option>
													<option value="1pm-10pm">1pm-10pm</option>
													<option value="2pm-11pm">2pm-11pm</option>
													<option value="3pm-12am">3pm-12am</option>
												</select>
											</div>
										</td>
										<td>
											<button id={i} className="addSchedule btn btn-small waves-effect waves-light green accent-3" onClick={() => handleUpdateEmpSchedule(i)}>
												Add
											</button>
										</td>
										<td>
											<button id={i} className="clearSchedule btn btn-small waves-effect waves-light green accent-3" onClick={() => handleClearEmpSchedule(i)}>
												Clear
											</button>
										</td>
									</tr>
								);
							}, this)}
						</tbody>
					</table>
				</div>
			</div>
		</div>

	);
}

export default ManagerSchedulesCreate;
