import { memo } from "react";
import { Button } from "@arco-design/web-react";

import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";

export default memo(function Footer() {
  const { t } = useTranslation();

  const cli = () => {
    window.open("https://beian.miit.gov.cn/#/Integrated/index");
  };
  return (
    <Wrapper>
      <div>
        <Button style={{ color: "blue" }}>{t("app.footer.PoweredByArco")}</Button>
        <span>
          UED-{t("app.footer.VolcanicEngine")} & {t("app.footer.ArchitectureFrontEnd")} ⓒ {t("app.footer.Copyright")} 2019-2024
        </span>
      </div>
      <p onClick={cli}>京ICP备19059916号-18</p>
    </Wrapper>
  );
});
