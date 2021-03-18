import { css } from '@emotion/css';
import { colors, breakpoints } from '../../constants/styles';

const { primaryBlack, primaryWhite } = colors;
const { medium } = breakpoints;

export const appStyle = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const headerStyle = css`
  text-align: center;
  background: ${primaryBlack};
  margin-bottom: 10px;
  color: ${primaryWhite};
  text-transform: uppercase;

  h1 {
    font-size: 1.2rem;
    font-weight: normal;
  }
`;

export const footerStyle = css`
  text-align: center;
  padding: 40px 0 15px 0;
`;

export const contentStyle = css`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;

  @media (max-width: ${medium}) {
    flex-direction: column;
    align-items: stretch;
  }

  .words-list {
    flex: 220px;
    max-width: 220px;

    @media (max-width: ${medium}) {
      order: 1;
      flex: 0;
      max-width: initial;
      width: 350px;
      margin: 40px auto 0;
    }
  }

  .search {
    flex: 1;
    padding-left: 60px;

    input {
      min-width: 120px;
    }

    @media (max-width: ${medium}) {
      flex: 50vh;
      padding-left: 0;
      width: 90%;
      margin: 0 auto;
    }
  }
`;
