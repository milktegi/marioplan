import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {

	return(
		<nav className="nav-wrapper indigo darken-9">
			<div className="cotainer">
				{/* logo */}
			<Link to="/" className="brand-logo">
			blue;s 	</Link>
			{/* nesting */}
			<SignedInLinks/>
			<SignedOutLinks/>
		
			</div>
		</nav>
	)
}

export default Navbar;