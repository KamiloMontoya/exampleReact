import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import BadgeNew from './pages/BadgeNew'


const container = document.getElementById('app')
 // ReactDOM.render(__que__, __donde__)
// ReactDOM.render(
// <BadgeNew 
// 	first_name="Camilo" 
// 	last_name="Montoya" 
// 	job_title="Desarrollador de softwate" 
// 	tiwtter="kamiloMontoya" 
// 	avatar="https://scontent.fbog10-1.fna.fbcdn.net/v/t1.0-9/s960x960/80805641_10221407658484678_3915577682099699712_o.jpg?_nc_cat=103&_nc_ohc=aaUrq635nKgAX_rEzZU&_nc_ht=scontent.fbog10-1.fna&_nc_tp=7&oh=609836bcf6dde08f80aa30dec7fcf153&oe=5EB9F58D"

// />, container)

ReactDOM.render(<BadgeNew />, container)

