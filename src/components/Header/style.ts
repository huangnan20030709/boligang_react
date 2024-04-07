import styled from "styled-components";
export const AppHeaderWrapper = styled.div`
  height: 60px;
  width: 100vw;

  background-color: var(--color-bg-1);
  color: var(--color-text-1);
  border-bottom: 1px solid var(--color-text-3);
  font-size: 14px;
  /* border-bottom: 1px solid var(--color-text-2); */
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  line-height: 60px;
  margin-left: 15px;
  svg {
    cursor: pointer;
  }
  h1 {
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const RightNav = styled.ul`
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: space-around;
  line-height: 60px;
  margin-right: 30px;
  svg {
    cursor: pointer;
  }
`;
