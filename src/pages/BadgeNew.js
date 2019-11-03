import React from "react";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import header from "../images/badge-header.svg";

import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
	state = {
		form: {
			first_name: "",
			last_name: "",
			email: "",
			twitter: "",
			job_title: ""
		}
	};

	handleChange = e => {
		this.setState({
			form: {
				...this.state.form, // mantiene los valores anteriores
				[e.target.name]: e.target.value
			}
		});
	};

	render() {
		return (
			<React.Fragment>
				
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="img header" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								fistname={this.state.form.first_name}
								avatarUrl="https://st2.depositphotos.com/1007566/12375/v/950/depositphotos_123753800-stock-illustration-avatar-man-cartoon.jpg"
								lastname={this.state.form.last_name}
								jobTitle={this.state.form.job_title}
								twitter={this.state.form.twitter}
							/>
						</div>

						<div className="col-6">
							<BadgeForm
								onChange={this.handleChange}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew;
