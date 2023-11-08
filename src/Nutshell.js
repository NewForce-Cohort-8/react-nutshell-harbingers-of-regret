
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { NavBar } from './components/nav/NavBar';
import { ApplicationViews } from "./components/Views/ApplicationViews";
import React, { useState } from "react";
import { Login } from './components/Auth/LoginForm';
import { Authorized } from "./components/Views/Authorized";
function Nutshell() {
	return <Routes>
	<Route path="/login" element={<Login />} />  
	<Route path="*" element={
	  <Authorized>
		<>
		  <NavBar />
		  <ApplicationViews />
		</>
	  </Authorized>
  
	} />
  </Routes>
  }

export default Nutshell;


