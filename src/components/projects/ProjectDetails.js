import React from 'react'

const ProjectDetails = (props) => {
	console.log(props);
	const id = props.match.params.id;
  return (
	<div className="container section project-details">
	  <div className="card z-depth-0">
		  <div className="card-content">
			  <span className="card-title">
				  PT {id}
			  </span>
			  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit est ab exercitationem. Laboriosam tenetur iure quod nemo atque vel porro reprehenderit architecto, fuga asperiores neque incidunt nulla optio accusantium.</p>
		  </div>
		  <div className="card-action grey lighten-4 grey-text">
			  <div>Posted by mario2</div>
			  <div>2:00PM/11/20</div>
		  </div>
	  </div>
	</div>
  )
}

export default ProjectDetails