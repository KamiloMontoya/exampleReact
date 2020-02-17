import React from 'react'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeEdit.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'

class BadgeEdit extends React.Component {
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

	componentDidMount(){
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null})

		try{	
			const data = await api.badges.read( this.props.match.params.badgeId )
			this.setState({ loading: false, form: data })

		}catch(error){
			this.setState({ loading: false, error: error})
		}
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		this.setState({ loading: true, error: null})

		try{	
			await api.badges.update( this.props.match.params.badgeId, this.state.form )
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
				<div className="BadgeEdit__hero"> 
					<img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo"/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-6">
							<Badge 
								firstName={this.state.form.firstName || 'First name'}
								lastName={this.state.form.lastName || 'Last name'}
								jobTitle={this.state.form.jobTitle || 'Job Tittle'}
								twitter={this.state.form.twitter || 'Twitter'}
								email={this.state.form.email || 'Email'}
							/>
						</div>
						<div className="col-sm-12 col-md-6">
							<h1> Edit Attendant </h1>
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

export default BadgeEdit

