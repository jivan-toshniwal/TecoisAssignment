import toast from 'react-hot-toast';
import Button from './UI/Button';
import Input from './UI/Input';
import { StyledDiv } from './UI/MixedStyle';
import { useState } from 'react';

function LoginPage({ setIsSignUp, getCredentials }) {
  const [user, setUser] = useState({ email: '', password: '' });

  function onChangeHandler(e) {
    const { name, value } = e.target;
    setUser((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }

  function onSubmit() {
    // Perform Email validation before submit here

    if (!user.email.length) {
      toast.error('Please provide email id!');
      return;
    }
    if (!user.password.length) {
      toast.error('Please enter valid password!');
      return;
    }

    getCredentials(user);
  }

  return (
    <StyledDiv>
      <h1>Login to Download</h1>
      <Input
        type='text'
        placeholder='Email'
        name='email'
        value={user.email}
        onChange={onChangeHandler}
      />
      <Input
        type='password'
        placeholder='Password'
        name='password'
        value={user.password}
        onChange={onChangeHandler}
      />
      <Button $size='medium' onClick={onSubmit}>
        Login
      </Button>

      <p style={{ color: 'skyblue', cursor: 'pointer' }} onClick={setIsSignUp}>
        Sign-Up?
      </p>
    </StyledDiv>
  );
}

export default LoginPage;
