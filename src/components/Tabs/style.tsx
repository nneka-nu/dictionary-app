import { css } from '@emotion/css';
import { colors } from '../../constants/styles';

export const tabsStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background: #f0f0f0;

  button {
    flex: 1 0;
    border: 0;
    background: none;
    height: 41px;

    &:focus,
    &:active {
      color: ${colors.hoverGray};
    }
  }
`;

export const lineStyle1 = css`
  height: 5px;
  position: absolute;
  bottom: 0;
  background: #b3aa25;
  transition: left 0.2s;
`;
