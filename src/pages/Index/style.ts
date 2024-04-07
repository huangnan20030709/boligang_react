import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  .left {
    flex: 9;
    margin-right: 15px;
    & > div {
      margin-bottom: 10px;
    }
    .main {
      .showData {
        .dataItem {
          display: flex;
          align-items: center;
          margin-top: 10px;
          .col {
            margin-left: 12px;
          }
        }
      }
    }

    .mainFooter {
      display: flex;
      & > div:nth-child(1) {
        margin-right: 10px;
      }
    }
  }
  .right {
    flex: 3;
    & > div {
      margin-bottom: 5px;
    }
  }
  .card {
    border-radius: 5px;
    width: 100%;
    background-color: var(--color-bg-1);

    .title {
      font-size: 30px;
      color: var(--color-text-1);
    }

    .arco-card-header {
      /* border-bottom: none; */
    }
  }
`;
