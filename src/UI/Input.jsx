import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #d1d5db;
  background-color: #fff;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  width: 90%;
  color: black;

  &:focus {
    outline: none; /* Remove default focus outline */
    border-color: var(--color-primary); /* Change border color on focus */
    box-shadow: 0 0 0 2px var(--color-primary-100); /* Add a box shadow on focus */
  }
`;

export default Input;
