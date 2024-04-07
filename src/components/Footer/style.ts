import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  width: 100%;
  border-top: 1px solid var(--color-text-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  span {
    margin: 10px;
  }
  div {
    font-size: 14px;
    line-height: 30px;
    color: var(--color-text-2);
  }
  p {
    font-size: 16px;
    line-height: 30px;
    color: var(--color-text-1);
  }
  p:hover {
    cursor: pointer;
    color: blue;
  }
`;
