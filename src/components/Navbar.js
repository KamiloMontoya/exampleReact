// 	avatar="https://scontent.fbog10-1.fna.fbcdn.net/v/t1.0-9/s960x960/80805641_10221407658484678_3915577682099699712_o.jpg?_nc_cat=103&_nc_ohc=aaUrq635nKgAX_rEzZU&_nc_ht=scontent.fbog10-1.fna&_nc_tp=7&oh=609836bcf6dde08f80aa30dec7fcf153&oe=5EB9F58D"
import React from 'react'

import './styles/Navbar.css'
import logo from '../images/logo.svg'

class Navbar extends React.Component {
	render() {
		return(
			<div className="Navbar">
				<div className="container-fluid"> 
					<a className="Navbar__brand" href="/"> 
						<img className="Navbar__brand-logo" src={logo} alt="Logo"/>
						<span className="font-weight-light"> Example </span>
						<span className="font-weight-bold"> Badges </span>
					</a> 
				</div>
			</div>
		)
	}
}

export default Navbar
