import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {GoogleLogin, GoogleOAuthProvider, TokenResponse, useGoogleLogin} from "@react-oauth/google";
// import dotenv from 'dotenv'

function GoogleButton() {

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  return (
    <div>
      <GoogleLogin onSuccess={() => {}}></GoogleLogin>
      <button onClick={() => login()}>Login</button>
    </div>
  )
}

function App() {
  // dotenv.config()
  let googleClientId: string = process.env.GOOGLE_CLIENT_ID || (() => { throw new Error("GOOGLE_CLIENT_ID env not found"); })();
  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <p>Hello</p>
        <GoogleOAuthProvider clientId={googleClientId}>
          <GoogleButton></GoogleButton>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default App;
