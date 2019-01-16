import React from "react";
import ReactDOM from "react-dom";

export class Uncontroll extends React.Component {

	handleSubmit(event){
		console.log("Submitted values are: " + event.target.name.value + " " + event.target.email.value);
		event.preventDefault();
	}
	render(){
		return(
			<div className="container">
				<form onSubmit={this.handleSubmit.bind(this)}>
				 <div className="form-group">Name: <input type="text" name="name" /></div>
				 <div className="form-group">E-mail: <input type="email" name="email" /></div>
				 <button className="btn btn-success" type="submit">Submit</button>
			    </form>
			    
			</div>

		);
	}
}