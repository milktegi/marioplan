import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {

	return(
		<ul className="right">
			<li><NavLink to="/">새로운 프로젝트</NavLink></li>
			<li><NavLink to="/">로그아웃</NavLink></li>
			<li>
			<NavLink to="/" className="btn btn-floating pink ligthen-1">
			ㅎㅎ
			</NavLink>
			</li>
		</ul>
	)

}

export default SignedInLinks;