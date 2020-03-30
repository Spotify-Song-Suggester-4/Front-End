import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import api from './utilities/Api';
import useInput from './useInput';
import styled from 'styled-components';

export const Div = styled.div`
  background: linear-gradient(
    180deg,
    rgba(185, 49, 107, 1) 0%,
    rgba(121, 48, 113, 1) 54%,
    rgba(52, 47, 120, 1) 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  color: white;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

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
    <Div>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
      </Form>
    </Div>
  );
};

export default SignUp;
