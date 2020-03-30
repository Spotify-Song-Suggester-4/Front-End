import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import api from './utilities/Api';
import useInput from './useInput';

const LogIn = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const [username, setUsername, handleUsername] = useInput('username', '');
  const [password, setPassword, handlePassword] = useInput('password', '');

  const onSubmit = (e) => {
    // e.preventDefault()

    const data = {
      username: username,
      password: password,
    };
    console.log(data);
    api()
      .post('/api/auth/login', data)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        props.history.push();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => handleUsername(e.target.value)}
          ref={register({ required: true })}
        ></input>
        {errors.username && 'username is required'}
        <label>password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
          ref={register({ required: true })}
        ></input>
        {errors.password && 'password is required'}
        <button>submit</button>
        <Link>forgot password?</Link>
        <Link to="/signup">sign up</Link>
      </form>
    </div>
  );
};

export default LogIn;
