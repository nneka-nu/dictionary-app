import { css } from '@emotion/css';

export const definitionsStyle = css`
  header {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;

    h1 {
      font-size: 1.5rem;
      margin-right: 10px;
    }

    button {
      border: none;
      background: none;
      color: #1d70b9;
      text-decoration: underline;
      padding: 0;

      &:hover {
        cursor: pointer;
        background: #f0f0f0;
      }

      &:focus,
      &:active {
        color: darkgray;
      }
    }
  }
`;
