import React, {useState} from 'react';
import con from '../src/imgs/contact.jpg';

const Contact = () => {
	const [data, setData] = useState({
		fname: " ",
		phone: " ",
		email: " ",
		msg: " "
	});

	const InputEvent = (event) => {
		const {name, value} = event.target;

		setData((preVal) => {
			return {
				...preVal,
				[name]: value,
			};
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();  //to not refresh page after submit form
		alert(`
				My name is ${data.fname}. My number is ${data.phone}. Email id is ${data.email}.
			`);
	};

	return(
			<>
				<div className="my-5">
					<h1 className="text-center">Contact Us </h1>
				</div>
				<div className="container-fluid mb-5">
					<div className="row">
						<div className="col-md-6 col-lg-6 col-10 mx-auto">
							<form onSubmit={formSubmit}>
								<div className="form-group">
								    <label for="exampleFormControlInput1">Full Name</label>
								    <input type="text" className="form-control"
								     	name="fname"
								     	value={data.fname}
								     	onChange={InputEvent}
								     	placeholder="Your full name"
								      />
								</div>
								<div className="form-group">
								    <label for="exampleFormControlInput1">Phone</label>
								    <input type="text" className="form-control"
								     	name="phone"
								     	value={data.phone}
								     	onChange={InputEvent}
								     	placeholder="Mobile number" 
								     />
								</div>
								<div className="form-group">
								    <label for="exampleFormControlInput1">Email address</label>
								    <input type="email" className="form-control"
								     	name="email"
								     	value={data.email}
								     	onChange={InputEvent}
								     	placeholder="name@example.com"
								 	/>
								</div>
								<div className="form-group">
								    <label for="exampleFormControlTextarea1">Message</label>
								    <textarea className="form-control"
								    	name="msg"
								     	value={data.msg}
								     	onChange={InputEvent}
								        rows="3"></textarea>
								</div>
								<div className="col-12">
									<button className="btn btn-outline-primary" type="submit">
										Submit Form 
									</button>
								</div>
							</form>
						</div>
						<div className="col-md-4 col-lg-4 col-10 mx-auto d-flex justify-content-center con">
							<img src={con} className="img-responsive" alt="Contact img" />
						</div>
					</div>
				</div>
			</>
		);
}

export default Contact;