import { css } from '@emotion/css';
import { colors } from '../../constants/styles';

export const formStyle = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  input {
    padding: 8px 30px 8px 16px;
    font-size: 1rem;
    flex: 1;
  }

  .clear-icon {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 128px;

    svg {
      font-size: 1.6rem;
    }

    &:hover {
      color: ${colors.hoverGray};
    }
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
