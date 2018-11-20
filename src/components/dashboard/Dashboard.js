import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import Notification from '../dashboard/Notification';

class DashBoard extends Component {
	state = {  }
	render() { 
		return (
		<div class="dashboard container">
			{/* div for left(project-list) */}
			<div className="row">
				<div className="col s12 m6">
					<ProjectList/>		
				</div>
			{/* end of ProjectList */}
			{/* div for right(notification) */}
			<div className="col s12 m5 offset-m1">
				<Notification/>
			</div>
			{/* end of notification */}
			</div>
		</div>	
		);
	}
}
 
export default DashBoard;