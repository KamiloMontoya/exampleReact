import React from 'react'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
	render() {
		return(
			<div>
				<Navbar /> 
				<div className="BadgeNew__hero"> 
					<img className="img-fluid" src={header} alt="Logo"/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge 
								first_name="Camilo" 
								last_name="Montoya" 
								job_title="Desarrollador de softwate" 
								tiwtter="kamiloMontoya" 
								avatar="https://scontent.fbog10-1.fna.fbcdn.net/v/t1.0-9/s960x960/80805641_10221407658484678_3915577682099699712_o.jpg?_nc_cat=103&_nc_ohc=aaUrq635nKgAX_rEzZU&_nc_ht=scontent.fbog10-1.fna&_nc_tp=7&oh=609836bcf6dde08f80aa30dec7fcf153&oe=5EB9F58D"
							/>
						</div>
						<div className="col-6">
							<BadgeForm />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BadgeNew

