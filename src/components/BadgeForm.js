import React from 'react'
// import './styles/BadgeFrom.css'

class BadgeFrom extends React.Component{
	state = {}

	handleChange = (event) => {
		// console.log( {
		// 	name: event.target.name,
		// 	value: event.target.value
		// } )
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleClick = (event) => {
		console.log( "btn click" )
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log( "Form was submit" )
		console.log(this.state)
	}

	render() {

		return (
			<div> 
				<h1> New Attendant </h1>
				<form onSubmit={this.handleSubmit}> 
					<div className="form-group">
						<label htmlFor="" > First Name </label>
						<input 
							onChange={this.handleChange} 
							className="form-control" 
							type="text" 
							name="first_name"
							value={this.state.first_name || ''}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="" > Last 
						Name </label>
						<input 
							onChange={this.handleChange} 
							className="form-control" 
							type="text" 
							name="last_name"
							value={this.state.last_name || ''}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="" > Email </label>
						<input 
							onChange={this.handleChange} 
							className="form-control" 
							type="email" 
							name="email"
							value={this.state.email || ''}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="" > Job Title </label>
						<input 
							onChange={this.handleChange} 
							className="form-control" 
							type="text" 
							name="job_title"
							value={this.state.job_title || ''}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="" > Tiwtter </label>
						<input 
							onChange={this.handleChange} 
							className="form-control" 
							type="text" 
							name="tiwtter"
							value={this.state.tiwtter || ''}
						/>
					</div>
					

					<button type="submit" onClick={this.handleClick} className="btn btn-primary"> Submit </button>
				</form>
			</div>
		)
	}
}

export default BadgeFrom