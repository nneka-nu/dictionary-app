import { css } from '@emotion/css';

export const definitionsStyle = css`
  margin-top: 10px;
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

export const definitionsListStyle = css`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li:first-child p {
    margin-top: 0;
  }

  li p {
    margin-bottom: 0;
  }

  .part-of-speech {
    color: #6c6969;
  }

  .attribution {
    font-size: 0.7rem;
  }
`;

export const wordnikAttrStyle = css`
  display: inline-block;
  margin-top: 20px;
  font-size: 0.9rem;
`;
