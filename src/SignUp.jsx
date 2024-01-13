import Button from './UI/Button';
import Input from './UI/Input';
import { StyledDiv } from './UI/MixedStyle';
import { useState } from 'react';

const initial_user = {
  name: '',
  company: '',
  location: '',
  contact: '',
  email: '',
  password: '',
};

function SignUp({ setIsSignUp, getUserData }) {
  const [user, setUser] = useState(initial_user);
  const [error, setError] = useState('');

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
    // Perform all validation and then set data
    // Example
    for (const key in user) {
      if (!user[key].length) {
        setError('All fields are mandatory');
        return;
      }
    }
    getUserData(user);
  }

  return (
    <StyledDiv>
      <h1>New User</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Input
        type='text'
        placeholder='Name'
        name='name'
        value={user.name}
        onChange={onChangeHandler}
      />
      <Input
        type='text'
        placeholder='Enter Company Name'
        name='company'
        value={user.company}
        onChange={onChangeHandler}
      />
      <Input
        type='text'
        placeholder='Enter Location'
        name='location'
        value={user.location}
        onChange={onChangeHandler}
      />
      <Input
        type='text'
        placeholder='Enter Mobile Number'
        name='contact'
        value={user.contact}
        onChange={onChangeHandler}
      />

      <Input
        type='text'
        placeholder='Enter Email Id'
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
        Sign Up
      </Button>
      <p style={{ color: 'skyblue', cursor: 'pointer' }} onClick={setIsSignUp}>
        Login? Click here
      </p>
    </StyledDiv>
  );
}

export default SignUp;
