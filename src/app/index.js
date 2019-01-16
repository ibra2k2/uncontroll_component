//console.log("It's Working");

import React from "react";
import ReactDOM from "react-dom";

class Search extends React.Component {
	constructor(){
		super();
		this.state={
			searchTerm: "React"
		};
	}
    // handleChange=(e)=>{
    // 	this.setState({searchTerm: e.target.value.substr(0, 20)});
    // }

        handleChange(e){
    	this.setState({searchTerm: e.target.value.substr(0, 20)});
    }

	render(){
		return(
			<div className="container">
			{/*Search Term: <input type="search" value={this.state.searchTerm} onChange={this.handleChange}/>*/}
			Search Term: <input type="search" value={this.state.searchTerm} onChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}

ReactDOM.render(<Search />, window.document.getElementById("app"));

