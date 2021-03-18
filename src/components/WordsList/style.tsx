import { css } from '@emotion/css';
import { colors } from '../../constants/styles';

export const listStyle = css`
  list-style-type: none;
  padding: 20px 0 20px 20px;
  background: ${colors.primaryBlack};
  height: 50vh;
  margin: 0;
  overflow: scroll;

  li {
    margin-bottom: 6px;
  }

  li:last-child {
    margin-bottom: 20px;
  }

  button {
    cursor: pointer;
    border: 0;
    background: none;
    padding: 0;
    text-transform: uppercase;
    color: ${colors.primaryWhite};

    &:focus,
    &:active {
      color: ${colors.hoverGray};
    }

    &.delete {
      color: rgb(213, 56, 56);
      margin-left: 10px;
      position: relative;
      top: 0.5px;
      left: 0;

      &:focus,
      &:active {
        color: rgba(213, 56, 56, 0.5);
      }
    }
  }
`;
