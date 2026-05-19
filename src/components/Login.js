import React from 'react';
import { GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import 'firebase/app';
import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () =>{
	return(
		<div id="login-page">
			<p $>w41k3r5_j01n</p>
				<p $>===========================================</p>
				<p $>Interface_Connection.exe version 07.01.99</p>
				<p $>===========================================</p>
				<p $>.....</p>
				<p $>CONNECTION TO NETWORK</p>
				<p $>CONNECTION ESTABLISHED ✔️</p>
				<p $>3x3cut1ng m41nfr4m3 c0d3</p>
				<p $>.....</p>
				<p $>☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️</p>
				<p $>MAINFRAME ACCESSED</p>
				<p $>.....</p>
				<p $>Spoofing Handshake...</p>
				<p $>.....</p>
				<p $>Loading...</p>
				<p $>[==================================================</p>
				<p $>=========================]</p>
				<p $>Connection will be maintained for 30 minutes</p>
				<p $>.....</p>
				<p $>PoWeReD bY: w41k3r_18697</p>
			<div id="login-card">
				<h2>w31c0m3 w47k3r to m47k3r_ch47</h2>
				<div
					className="login-button google"
					onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
				>
					<GoogleOutlined /> 51gn m17h 600673	
				</div>	
			</div>
		</div>
	);
}

export default Login;