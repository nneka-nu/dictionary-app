import { css } from '@emotion/css';

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

  h1 {
    font-size: 1.3rem;
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

  .words-list {
    flex: 0 0 220px;
  }

  .search {
    flex: 1;
    padding-left: 60px;
  }
`;
