import { memo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IconLanguage, IconMoon, IconSun } from "@arco-design/web-react/icon";
import { Tooltip } from "@arco-design/web-react";

import useLocale from "@/hooks/useLocale";
import useTheme from "@/hooks/useTheme";

export default memo(function ThemeLocal() {
  const { isDark, switchTheme } = useTheme();
  const { switchLanguage } = useLocale();
  const { t } = useTranslation();

  return (
    <div
      style={{
        position: "fixed",
        top: 30,
        right: 100,
        width: "80px",
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
      }}>
      <Tooltip position="bottom" trigger="hover" content={t("app.header.swichThemeWithClick")}>
        {isDark ? (
          <IconMoon onClick={switchTheme} style={{ width: "20px", height: "20px" }} />
        ) : (
          <IconSun onClick={switchTheme} style={{ width: "20px", height: "20px" }} />
        )}
      </Tooltip>

      <Tooltip position="bottom" trigger="hover" content={t("app.header.swichLangWithClick")}>
        <IconLanguage onClick={switchLanguage} style={{ width: "20px", height: "20px" }} />
      </Tooltip>
    </div>
  );
});
