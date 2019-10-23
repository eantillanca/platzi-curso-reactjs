import React from "react";

class BadgeForm extends React.Component {
	state = {};

	/*
	handleChange = e => {
		//console.log({ name: e.target.name, value: e.target.value });
		this.setState({
			[e.target.name]: e.target.value
		});
    };
    */

	handleSubmit = e => {
		e.preventDefault();
		console.log("Button was clicked!");
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<h1>New Attendant</h1>

				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="first_name">First Name</label>
						<input
							type="text"
							className="form-control"
							name="first_name"
							id="first_name"
							onChange={this.props.onChange}
							value={this.props.formValues.first_name}
						/>

						<label htmlFor="last_name">Last Name</label>
						<input
							type="text"
							className="form-control"
							name="last_name"
							id="last_name"
							onChange={this.props.onChange}
							value={this.props.formValues.last_name}
						/>

						<label htmlFor="email">Email</label>
						<input
							type="email"
							className="form-control"
							name="email"
							id="email"
							onChange={this.props.onChange}
							value={this.props.formValues.email}
						/>

						<label htmlFor="twitter">Twitter</label>
						<input
							type="text"
							className="form-control"
							name="twitter"
							id="twitter"
							onChange={this.props.onChange}
							value={this.props.formValues.twitter}
						/>

						<label htmlFor="job_title">Job Title</label>
						<input
							type="text"
							className="form-control"
							name="job_title"
							id="job_title"
							onChange={this.props.onChange}
							value={this.props.formValues.job_title}
						/>

						<button className="btn btn-primary">Save</button>
					</div>
				</form>
			</div>
		);
	}
}

export default BadgeForm;
