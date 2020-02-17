import React from 'react'
import {Link} from 'react-router-dom'
import header from '../images/badge-header.svg'
import './styles/Badges.css'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader'

import api from '../api'

class Badges extends React.Component {
	

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 5000)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try{
      // llamada a la API
      const data = await api.badges.list()
      this.setState({ loading: false, data: data })

    } catch(e){
      this.setState({ loading: false, error: e })
    }
  }


  componentDidUpdate(prevProps, prevState){
    console.log({
      prevProps: prevProps,
      prevState: prevState
    })
    console.log({
      props: this.props,
      state: this.state
    })
  }
   
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

	render() {

    if (this.state.loading === true && !this.state.data){
      return <PageLoading/>
    }

    if (this.state.error){
      return <PageError error={this.state.error} />
    }

		return(
			<React.Fragment>
				<div className="Badges"> 
					<div className="Badges__hero"> 
						<div className="Badges__container"> 
						<img className="Badges_conf-logo" src={header} alt="Logo"/>
						</div>
					</div>

					<div className="Badges__container"> 
						<div className="Badges__buttons"> 
							<Link to="badges/new" className="btn btn-primary"> New badge </Link>
						</div>

						<BadgesList badges={this.state.data} />
						
            {this.state.loading && <MiniLoader /> }
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Badges

