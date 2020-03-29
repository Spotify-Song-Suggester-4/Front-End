import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import api from './utilities/Api';
import useInput from './useInput';

const SignUp = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const [username, setName, handleName] = useInput('name', '');
  const [password, setPassword, handlePassword] = useInput('password', '');

  const onSubmit = () => {
    const data = {
      username: username,
      password: password,
    };
    console.log(data);
    api()
      .post('/api/auth/register', data)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        // props.history.push()
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
          onChange={(e) => handleName(e.target.value)}
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
        <h4>
          already have an account?<Link to="/Login">log in here</Link>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
