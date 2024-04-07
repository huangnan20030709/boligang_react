import { memo, Suspense } from "react";
import { Card } from "@arco-design/web-react";

import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import Welcome from "./components/Welcome";
import Online from "./components/Online";
import Quick from "./components/Quick";
import Content from "./components/Content";
import Announcement from "./components/Announcement";
import Help from "./components/Help";

export default memo(function Index() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="left">
        <div>
          <Welcome></Welcome>
        </div>
        <div className="mainFooter">
          <Online></Online>
          <Content></Content>
        </div>
      </div>

      <div className="right">
        <Quick></Quick>
        <Announcement></Announcement>
        <Help></Help>
      </div>
    </Wrapper>
  );
});
