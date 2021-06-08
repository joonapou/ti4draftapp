import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import LoginPage from '../components/LoginPage.jsx'

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    //call api
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    })
      .then((r) => {
        console.log(r)
        return r.json();
      })
      .then((data) => {
        console.log(data)
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, {expires: 2});
          Router.push('/');
        }
      });
  }
  return (
    <LoginPage/>
  );
};

export default Login;