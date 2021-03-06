import React, { Component } from 'react'

class SignUp extends Component {
  state = {
	  email: '',
	  password: '',
	  username: ''
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
		<h5 className="grey-text text-darken-3">회원 가입</h5>
			<div className="input-field">
			<label htmlFor="username">이름</label>
			<input type="text" id="username" 
			onChange={this.handleChange}/>
		</div>
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
		<button className="btn orange lighten-10 z-depth-0">
			제출
		</button>
		</div>
		</form>
	  </div>
	)
  }
}

export default SignUp
