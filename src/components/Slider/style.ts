import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  width: 220px;

  background-color: var(--color-bg-1);
  height: calc(100vh - 61px);
  /* border-right: 1px solid var(--color-text-2); */
  position: fixed;
  top: 61px;
  .menu-demo {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: var(--color-neutral-2);
    .arco-menu-item,
    .arco-menu-inline {
      margin-bottom: 8px;
    }
    .arco-menu-item.arco-menu-item-indented {
      margin-bottom: 0px;
      padding-left: 40px;
    }
  }

  .menu-demo .arco-menu-inner {
    font-size: 14px;
  }
  .arco-menu-vertical {
    width: 100% !important;
    height: 100% !important;
  }
`;
