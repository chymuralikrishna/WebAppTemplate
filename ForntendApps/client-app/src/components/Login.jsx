import React, { useState, useRef } from 'react'; 
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Messages } from 'primereact/messages';
import axios from 'axios';

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "../resource/LoginPage.css"
const loginimage = require('../resource/images/login-image.jpg');

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const msgs = useRef(null);
    
  const handleLogin = async (event) => {
    event.preventDefault();

    axios.post('/login', {
      username: username,
      password: password
    })
    .then((response) => {
    const token = response.data.token;
    localStorage.setItem('authToken', token);
    window.location.href = '/authenticated-page';
    })
    .catch((error) => {
      console.log(error);
      msgs.current.show([
        {sticky: true, severity: 'error', summary: '', detail: ' Invalid Username or Password'}
    ]);
    });
  };



  return (
    <form onSubmit={handleLogin}>
     
    <div className="login-page">
      <div className="image-container">
        <Image src={loginimage} alt="Login"  />
      </div>
      <div className="form-container">
        <Card title="Login">
        <Messages ref={msgs} />
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="username">Username</label>
              <InputText
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="p-field">
              <label htmlFor="password">Password</label>
              <InputText
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="p-field-checkbox">
              <Checkbox
                inputId="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="p-field">
              <Button label="Login" onClick={handleLogin} />
            </div>
          </div>
        </Card>
      </div>
    </div>
    </form>
  );
};

export default LoginPage;
