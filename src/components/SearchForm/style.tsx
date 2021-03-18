import { css } from '@emotion/css';
import { colors } from '../../constants/styles';

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
    border: none;
    color: ${colors.primaryWhite};
    font-size: 0.95rem;
    background: ${colors.primaryBlack};
    text-transform: uppercase;
    margin-left: 8px;

    &:hover {
      color: ${colors.hoverGray};
    }
  }
`;
