import React, { useEffect, useReducer, useState } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { store } from 'react-notifications-component';

import socketIOClient from "socket.io-client";
const ENDPOINT = "ws://localhost:4000";

function App() {
	const [userAuth, dispatch] = useReducer(authReducer, {});

	const [sockets, setSockets] = useState();

	const alert = (data) => {
		console.log(data);
		const {zone, sensor} = data;
		console.log(zone);
		if(userAuth?.logged){ 
			store.addNotification({
				title: "Alert on "+zone, 
				message: "There is a problem with "+sensor,
				type: "warning",
				insert: "top",
				container: "top-right",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				// dismiss: {
				//   duration: 2000,
				//   onScreen: true
				// }
			  });

		}
	}

	useEffect(() => {
		const socket = socketIOClient(ENDPOINT);
		setSockets(socket);
		
	  }, []);

	useEffect(() => {
		if(userAuth?.logged){
			store.addNotification({
				title: "Welcome!",
				message: "This is you dashboad",
				type: "success",
				insert: "top",
				container: "top-right",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				dismiss: {
				  duration: 2000,
				  onScreen: true
				}
			  });

			  if (sockets) {
				  try {
					  sockets.removeAllListeners();
					  sockets.on("data", (data) => {
						  alert(JSON.parse(data));
					  });
					  
				  } catch (error) {
					  
				  }
				}
		}


	}, [userAuth])

	return (
		<AuthContext.Provider value={{ userAuth, dispatch }}>
			  <ReactNotification />
			<AppRouter />
		</AuthContext.Provider>
	);
}

export default App;
