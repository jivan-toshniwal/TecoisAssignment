import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: black;
    background-color: ${(props) => props.$color || 'white'};
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: white;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;

  ${(props) => sizes[props.$size]}
  ${(props) => variations[props.$variation]}
`;

Button.defaultProps = {
  $variation: 'primary',
  $size: 'medium',
};

export default Button;
