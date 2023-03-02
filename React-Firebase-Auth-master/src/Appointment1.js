import React, { useState, useRef } from 'react';
import emailjs, { send, sendForm } from "@emailjs/browser";

const Appointment1 = () => {

	const [user, setUser] = useState({
		name: "",
		name1:"",
		email: "",
		phone: "",
		TimeSlote: "",
		TestName: "",
		date: "",
		age: "",
	});

	let name, value;
	const getuserData = (event) => {
		name = event.target.name;	
		value = event.target.value;

		setUser({ ...user, [name]: value });
	};


	const postData = async (e) => {
		e.preventDefault();

		const { name,name1, email, phone, TimeSlote, TestName, date, age } = user;
		sendEmail();

		if (name &&name1 && email && phone && TimeSlote && TestName && date && age) {

			const res = await fetch("https://latest-c4831-default-rtdb.firebaseio.com/deep0.json",
				{
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify({
						name,
						name1,
						email,
						phone,
						TimeSlote,
						TestName,
						date,
						age,
					})
				}
			);

			if (res) {
				setUser({
					name: "",
					name1: "",
					email: "",
					phone: "",
					TimeSlote: "",
					TestName: "",
					date: "",
					age: "",
				});

				alert("Your Appointment has been Booked!!");
			}
		}
		else {
			alert("Please fill up all the details!!");
		}
	};

	const form = useRef();
	function sendEmail(e) {

		emailjs.sendForm('service_dms68fg', 'template_xudacms', form.current, '5p4D0NQySt-jL4q10')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	}


	return (

		<html lang="en">

			<head>
				<meta charSet="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500" rel="stylesheet" />
				<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
				<link type="text/css" rel="stylesheet" href="css/style.css" />

				<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
				<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>

				<script type="text/javascript"
					src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>


			</head>

			<body>
				<div id="booking" className="section">
					<div className="section-center">
						<div className="container">
							<div className="row">
								<div className="booking-form">
									<div className="form-header">
										<h1>Book Your Appointment</h1>
									</div>
									<form method="POST" ref={form} onSubmit={sendEmail} >
										<div className="row">
											<div className="col-sm-5">
												<div className="form-group">
													<span className="form-label">First Name</span>
													<input className="form-control" type="text" name="name" value={user.name} onChange={getuserData} placeholder="Enter your name" required />
												</div>
											</div>

											<div className="col-sm-5">
												<div className="form-group">
													<span className="form-label">Last Name</span>
													<input className="form-control" type="text" name="name1" value={user.name1} onChange={getuserData} placeholder="Enter your name" required />
												</div>
											</div>
										</div>

										<div className="row">
											<div className="col-sm-5">
												<div className="form-group">
													<span className="form-label">Email</span>
													<input className="form-control" type="email" name="email" value={user.email} onChange={getuserData} placeholder="Enter your email" required />
												</div>
											</div>

											<div className="col-sm-5">
												<div className="form-group">
													<span className="form-label">Phone</span>
													<input className="form-control" type="num" name="phone" value={user.phone} onChange={getuserData} placeholder="Enter your phone number" maxLength="10" required />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-5 my-1">
												<div className="form-group">
													<b>	<span className="form-label" htmlFor="time" >Prefered Time</span></b>
													<select id="time" type="time" name="TimeSlote" value={user.TimeSlote} onChange={getuserData} className="form-control" required >
														<option value="Select the time">Select the time</option>
														<option value="10:00 to 11:00">10:00 to 11:00</option>
														<option value="11:00 to 12:00">11:00 to 12:00</option>
														<option value="12:00 to 13:00">12:00 to 13:00</option>
														<option value="14:00 to 15:00">14:00 to 15:00 </option>
														<option value="15:00 to 16:00">15:00 to 16:00</option>
													</select>
												</div>
											</div>

											<div className="col-md-5 my-1">
												<div className="form-group">
													<b>	<span className="form-label" htmlFor="appointmentfor">Appointment For</span></b>

													<select id="appointmentfor" name="TestName" className="form-control my-1" value={user.TestName} onChange={getuserData} placeholder="Select the test" required>
													
														<option value="">Select the test</option>
														<optgroup label="Blood Test" value="Blood Test">
    														<option value="Blood Test - Hi tech Pathology Laboratory(Mahesana)">Hi tech Pathology Laboratory(Mahesana)</option>
    														<option value="Blood Test - Bhagyoday Hospital(Kadi)">Bhagyoday Hospital(Kadi)</option>
    														<option value="Blood Test - Parth Laboratory(Kadi)">Parth Laboratory(Kadi)</option>
															<option value="Blood Test - Akashar Laboratory(Kadi)">Akashar Laboratory(Kadi)</option>
															<option value="Blood Test - Sterling accuris diagnostics(Radhanpur)">Sterling accuris diagnostics(Radhanpur)</option>
															<option value="Blood Test - Shivam Hospital(Adalaj)">Shivam Hospital(Adalaj)</option>
  														</optgroup>
														  <br/>

														  <optgroup label="Covid RT-PCR Test" value="Covid RT-PCR Test">
    														<option value="Covid RT-PCR Test - Bhagyoday Hospital(Kadi)">Bhagyoday Hospital(Kadi)</option>
    														<option value="Covid RT-PCR Test - Shivam Hospital(Adalaj)">Shivam Hospital(Adalaj)</option>
  														</optgroup>

														{/* <option value="Tuberculosis(TB)">Tuberculosis(TB)</option> */}

														<optgroup label="Tuberculosis(TB)">
    														<option value="Tuberculosis(TB) - Bhagyoday Hospital(Kadi)">Bhagyoday Hospital(Kadi)</option>
    														<option value="Tuberculosis(TB) - SRL Diagnostics(Ahmedabad)">SRL Diagnostics(Ahmedabad)</option>
															<option value="Tuberculosis(TB) - Green Cross Pathology Laboratory(Ahmedabad)">Green Cross Pathology Laboratory(Ahmedabad)</option>
  														</optgroup>

														{/* <option value="Blood sugar Test">Blood sugar Test</option> */}
														<optgroup label="Blood sugar Test">
    														<option value="Blood sugar Test - Bhagyoday Hospital(Kadi)">Shivam Hospital(Adalaj)</option>
    														<option value="Blood sugar Test - Bhagyoday Hospital(Kadi)">Bhagyoday Hospital(Kadi)</option>
															<option value="Blood sugar Test - Parth Laboratory(Kadi)">Parth Laboratory(Kadi)</option>
  														</optgroup>

														{/* <option value="CT scan">CT scan</option> */}

														<optgroup label="CT Scan">
    														<option value="CT Scan - Health Plus Imaging center(Kadi)">Health Plus Imaging center(Kadi)</option>
    														<option value="CT Scan - Bhagyoday Hospital(Kadi)">Bhagyoday Hospital(Kadi)</option>
															<option value="CT Scan - Sarvoday Imaging Center(Mahesana)">Parth Laboratory(Kadi)</option>
  														</optgroup>

													
													
													</select>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-5">
												<div className="form-group">
													<span className="form-label">Date</span>
													<input className="form-control" name="date" value={user.date} onChange={getuserData} type="date" required />
												</div>
											</div>

											<div className="col-sm-5">
												<div className="form-group">
													<span className="form-label">Age</span>
													<input className="form-control" type="age" name="age" value={user.age} onChange={getuserData} placeholder="Enter your Age" maxLength="3" required />
												</div>
											</div>
										</div>
									</form>
									<button id="button" onClick={postData}>Submit</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</body>
		</html>
	)
}
// onClick={() => { func1(); func2();}}
// onClick="submit_by_id()"

export default Appointment1
