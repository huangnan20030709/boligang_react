import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Avatar, Tooltip } from "@arco-design/web-react";
import { IconMoon, IconSun, IconLanguage, IconFullscreen, IconFullscreenExit, IconGithub } from "@arco-design/web-react/icon";

import { observer, useStore } from "@/store";

import { RightNav } from "../style";

import useLocale from "@/hooks/useLocale";
import useTheme from "@/hooks/useTheme";

const HeaderRight = observer(function () {
  const { switchLanguage } = useLocale();
  const { isDark, switchTheme } = useTheme();
  const { t } = useTranslation();

  const { userStore, themeStore } = useStore();

  const [isFullScreen, setIsFullScreen] = useState(false);
  const switchFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }

    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    themeStore.fetchTheme();
  }, []);

  const navigate = useNavigate();

  const openRepositorie = () => {
    window.open("https://gitee.com/phoebe-amurensis/boligang");
  };

  return (
    <RightNav>
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

      <Tooltip position="bottom" trigger="hover" content={t(`app.header.${isFullScreen ? "exitFullScreenWithClick" : "swichFullScreenWithClick"}`)}>
        {isFullScreen ? (
          <IconFullscreenExit onClick={switchFullScreen} style={{ width: "20px", height: "20px" }} />
        ) : (
          <IconFullscreen onClick={switchFullScreen} style={{ width: "20px", height: "20px" }} />
        )}
      </Tooltip>

      <Tooltip position="bottom" trigger="hover" content={t("app.header.openRepositorie")}>
        <IconGithub onClick={openRepositorie} style={{ width: "35px", height: "35px" }} />
      </Tooltip>

      <Avatar size={35}>
        <img alt="avatar" src="https://avatars.githubusercontent.com/u/113844132?v=4" style={{ marginTop: "-28px" }} />
      </Avatar>
    </RightNav>
  );
});

export default memo(HeaderRight);
