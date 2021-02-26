import { css } from '@emotion/css';

export const listStyle = css`
  list-style-type: none;
  padding-left: 20px;

  li {
    margin-bottom: 6px;
  }

  button {
    border: 0;
    background: none;

    &:focus,
    &:active {
      color: darkgray;
    }
  }
`;
