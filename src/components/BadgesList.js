import React from 'react'
import {Link} from 'react-router-dom'

import './styles/BadgesList.css'

import Gravatar from './Gravatar'

class BadgesList extends React.Component{

	render (){

		if (this.props.badges.length === 0){
			return (
				<div>
					<h3> No badges found </h3>
					<Link className="btn btn-primary" to="/badges/new"> Create new badge </Link> 
				</div>
			)
		}

		return (
			<div className="BadgesList"> 
				<ul className="list-unstyled">
					{this.props.badges.map( (badge) => {
						return(
							<li key={badge.id} >
								<Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
									<div className="BadgesListItem"> 
										<Gravatar className="BadgesListItem__avatar" email={badge.email} />
										<div>
											<strong> {badge.firstName} {badge.lastName} </strong>
											<br/>
											@{badge.twitter}
						          <br/>
						          {badge.jobTitle}
					          </div>
									</div>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}
export default BadgesList