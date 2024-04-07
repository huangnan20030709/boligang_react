import { memo, Suspense } from "react";

import { Wrapper } from "./style";
import RightContent from "./components/RightContent";
import RightFooter from "./components/RightFooter";
import { Button } from "@arco-design/web-react";

import ThemeAndLocal from "@/components/ThemeAndLocal";

export default memo(function Login() {
  return (
    <Suspense fallback={<div>loading......</div>}>
      <Wrapper>
        <div className="card">
          <div className="left">
            <div className="title">打开知乎App</div>
            <div className="subtitle">在「我的页」右上角打开扫一扫</div>
            <div className="qr">
              <img src="/qr.png" alt="" />
            </div>
            <div className="tip">其他扫码方式：微信</div>
            <div style={{ display: "flex", justifyContent: "space-around", padding: "0 10px" }}>
              <Button shape="round" type="text" style={{ color: "#aaa", border: "1px solid #ccc", fontSize: "12px" }}>
                下载知乎App
              </Button>
              <Button shape="round" type="text" style={{ color: "#aaa", border: "1px solid #ccc", fontSize: "12px" }}>
                开通机构号
              </Button>
              <Button shape="round" type="text" style={{ color: "#aaa", border: "1px solid #ccc", fontSize: "12px" }}>
                无障碍模式
              </Button>
            </div>
          </div>

          <div className="right">
            <RightContent></RightContent>
            <RightFooter></RightFooter>
          </div>
        </div>
        <ThemeAndLocal></ThemeAndLocal>
      </Wrapper>
    </Suspense>
  );
});
