import { css } from '@emotion/css';

export const formStyle = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  input {
    padding: 8px 16px;
    font-size: 1rem;
    flex: 1;
  }

  button[type='submit'] {
    cursor: pointer;
    width: 115px;
    height: 41px;
    background: black;
    border: none;
    color: white;
    font-size: 0.9rem;

    &:hover {
      color: darkgray;
    }
  }
`;
