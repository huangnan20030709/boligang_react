import { Spin } from "@arco-design/web-react";

const Loading = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Spin dot size={50} />
    </div>
  );
};

export default Loading;
