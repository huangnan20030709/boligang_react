import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0.85turn, rgb(148, 222, 242), rgb(20, 87, 220));
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 720px;
    height: 500px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;

    display: flex;
    .left {
      flex: 5;
      text-align: center;
      .title {
        color: rgb(55, 58, 64);
        font-size: 16px;
        font-weight: 600;
        line-height: 23px;
        margin-top: 98px;
      }
      .subtitle {
        margin: 8px 0px 24px;
        min-width: 0px;
        color: rgb(55, 58, 64);
        font-size: 14px;
        line-height: 20px;
      }
      .tip {
        color: rgb(55, 58, 64);
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        margin: 20px 0 60px;
      }
    }
    .right {
      flex: 6;
      border-left: 1px solid #ccc;

      .footerContainer {
        padding: 0 20px;
        .line {
          display: flex;
          align-items: Center;
          .text {
            margin: 0 15px;
          }
          .border {
            box-sizing: border-box;
            margin: 0px;
            min-width: 0px;
            border-top: 1px solid rgb(235, 236, 237);
            border-right-color: rgb(235, 236, 237);
            border-bottom-color: rgb(235, 236, 237);
            border-left-color: rgb(235, 236, 237);
            width: 124px;
          }
          .text {
          }
        }
        .icon {
          display: flex;
          justify-content: space-around;
          padding: 0 30px;
          height: 60px;
        }
        .loginTip {
          color: #ccc;
          padding: 22px 24px 30px;
        }
      }
    }
  }
`;
