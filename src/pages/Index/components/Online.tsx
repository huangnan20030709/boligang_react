import { memo } from "react";
import { Card } from "@arco-design/web-react";

import { useTranslation } from "react-i18next";

export default memo(function Index() {
  const { t } = useTranslation();
  return (
    <Card className={"card"} bordered={false}>
      <p className="title">
        {t("page.index.welcome")} ! {}
      </p>
      Card content
      <br />
      Card content
    </Card>
  );
});
