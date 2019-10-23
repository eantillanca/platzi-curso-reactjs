import React from "react";

import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import header from "../images/badge-header.svg";

import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
	render() {
		return (
			<div>
				<Navbar />

				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="img header" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								fistname="Erik"
								avatarUrl="https://st2.depositphotos.com/1007566/12375/v/950/depositphotos_123753800-stock-illustration-avatar-man-cartoon.jpg"
								lastname="Antillanca"
								jobTitle="Computer Engineer"
								twitter="eantillanca"
							/>
						</div>

						<div className="col-6">
							<BadgeForm />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeNew;
