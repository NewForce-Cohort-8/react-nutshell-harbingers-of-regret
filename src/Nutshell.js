import React, { useState } from "react";
import LoginForm from "./Components/LoginForm";

function Nutshell() {
const adminUser = {
	email: "example@example.com", 
	password: "password"
}

const [user, setUser] = useState({name: "", email: ""});
const [error, setError] = useState(""); //string to catch if correct

const Login = details => {
console.log(details);

if (details.email == adminUser.email && details.password == adminUser.password)
	console.log("Logged in");
setUser({
	name: details.name,
	email: details.email
});
} 
const Logout = () => {
	setUser({name: "", email: ""});
}

	return (
		<div className="Nutshell">
			{(user.email != "") ? (
				<div className="welcome">
					<h2>Welcome</h2>
					<button onClick ={Logout}>Logout</button>
					</div>
			) : (
				<LoginForm Login={Login} error={error}/>
			)}
		</div>
		
	);
}

export default Nutshell;