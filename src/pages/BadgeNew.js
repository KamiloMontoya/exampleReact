import React from 'react'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'

class BadgeNew extends React.Component {
	state = { loading:false, error: null, form: {} }

	handleChange = (e) => {
		this.setState({
			loading: false,
			error: null,
			form: {
				...this.state.form,
				[e.target.name] : e.target.value
			}
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		this.setState({ loading: true, error: null})

		try{	
			await api.badges.create( this.state.form )
			this.setState({ loading: false })
      this.props.history.push('/badges')

		}catch(error){
			this.setState({ loading: false, error: error})
		}
	}

	render() {
		if (this.state.loading === true){
      return <PageLoading/>
    }

		return(
			<React.Fragment>
				<div className="BadgeNew__hero"> 
					<img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-6">
							<Badge 
								firstName={this.state.form.firstName || 'First name'}
								lastName={this.state.form.lastName || 'Last name'}
								jobTitle={this.state.form.jobTitle || 'Job Tittle'}
								tiwtter={this.state.form.tiwtter || 'Tiwtter'}
								email={this.state.form.email || 'Email'}
							/>
						</div>
						<div className="col-sm-12 col-md-6">
							<h1> New Attendant </h1>
							<BadgeForm 
								onChange={this.handleChange} 
								onSubmit={this.handleSubmit} 
								formValues={this.state.form}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default BadgeNew

