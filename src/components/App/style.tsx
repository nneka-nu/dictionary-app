import { css } from '@emotion/css';

export const appStyle = css`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  max-width: 900px;
  min-height: calc(100vh - 60px);
  margin: 30px auto;

  .words-list {
    max-width: 220px;
  }

  .search {
    flex: 1;
    padding-left: 60px;
  }
`;
