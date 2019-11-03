import React from "react";

import "./styles/BadgesList.css";

class BadgeListItem extends React.Component {
	render() {
		return (
			<div className="BadgesListItem">
				<img
					src={this.props.badge.avatarUrl}
					alt="avatar {this.props.badge.id}"
					className="BadgesListItem__avatar"
				/>
				<div>
					<strong>
						{this.props.badge.firstName} {this.props.badge.lastName}
					</strong>
					<br />@{this.props.badge.twitter}
					<br />
					{this.props.badge.jobTitle}
				</div>
			</div>
		);
	}
}

class BadgesList extends React.Component {
	render() {
		return (
			<div className="BadgesList">
				<ul className="list-unstyled">
					{this.props.badges.map(badge => {
						return (
							<li key={badge.id}>
								<BadgeListItem badge={badge} />
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default BadgesList;
