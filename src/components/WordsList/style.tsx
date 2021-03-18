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
    border: 0;
    background: none;
    text-transform: uppercase;
    color: ${colors.primaryWhite};

    &:focus,
    &:active {
      color: ${colors.hoverGray};
    }
  }
`;
