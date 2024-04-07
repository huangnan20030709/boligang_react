import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  .banner {
    flex: 4;
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
    .logo {
      display: flex;
      align-items: center;
      color: #fff;
      margin: 30px;

      svg {
        margin-right: 10px;
        margin-bottom: 7px;
      }
      span {
        font-size: 25px;
        font-weight: normal;
      }
    }

    .carousel {
      height: 100%;

      &-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
      }

      &-title {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: #fff;
        text-align: center;
      }

      &-sub-title {
        margin-top: 8px;
        font-size: 14px;
        line-height: 22px;
        color: #fff;
        text-align: center;
      }

      &-image {
        margin-top: 70px;
        width: 390px;
      }
    }
  }
  .content {
    flex: 7;

    .form {
      color: var(--color-text-1);
      height: 100vh;
      padding: 0 280px;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 25px;
        font-weight: normal;
        margin-bottom: 5px;
      }
    }
    .footer {
      position: absolute;
      bottom: 10px;
      width: 63%;
      footer {
        text-align: center;
        font-size: 18px;
        color: #444;
      }
    }
  }
`;
