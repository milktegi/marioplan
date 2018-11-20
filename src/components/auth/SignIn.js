import React, { Component } from 'react'

class SignIn extends Component {
  state = {
	  email: '',
	  password: ''
  }
  // when user changes input field, it fires 

  handleChange = e => {
	  this.setState({
		  [e.target.id] : e.target.value
	  })
	  console.log(e);
  }
  handleSubmit = e => {
	  console.log(e);
	  e.preventDefault();
	  console.log(this.state)
  }
  render() {
	return (
	  <div className="container">
		<form
		onSubmit={this.handleSubmit} 
		className="white">
		<h5 className="grey-text text-darken-3">로그인</h5>
		<div className="input-field">
			<label htmlFor="email">이메일</label>
			<input type="email" id="email" 
			onChange={this.handleChange}/>
		</div>
		<div className="input-field">
			<label htmlFor="password">패스워드</label>
			<input type="password" id="password" 
			onChange={this.handleChange}/>
		</div>
		<div className="input-field">
		<button className="btn pink lighten-1 z-depth-0">
			 로그인
		</button>
		</div>
		</form>
	  </div>
	)
  }
}

export default SignIn;
