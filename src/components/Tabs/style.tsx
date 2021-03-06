import { css } from '@emotion/css';

export const tabsStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background: #f0f0f0;

  button {
    flex: 1;
    border: 0;
    background: none;
    height: 41px;

    &:focus,
    &:active {
      color: darkgray;
    }
  }

  .line {
    width: 50%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: black;
    transition: left 0.2s;
  }
`;
