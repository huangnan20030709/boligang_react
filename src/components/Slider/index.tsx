import { memo, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { AppHeaderWrapper } from "./style";
import { IconApps, IconBook } from "@arco-design/web-react/icon";
import { Menu } from "@arco-design/web-react";

import { useTranslation } from "react-i18next";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
export default memo(function Slider() {
  const location = useLocation();
  useEffect(() => {}, []);

  const navigator = useNavigate();
  const { t } = useTranslation();

  const changeRoute = (a: string, b: Event, c: string[]) => {
    navigator(a);
  };
  const sliceLocation = () => {
    let str = location.pathname;
    let index = str.indexOf("/", 3);

    return str.slice(0, index);
  };
  return (
    <AppHeaderWrapper>
      <div className="menu-demo">
        <Menu
          style={{ width: 200, borderRadius: 4 }}
          defaultOpenKeys={[sliceLocation()]}
          defaultSelectedKeys={[location.pathname]}
          onClickMenuItem={changeRoute}>
          {/*  */}
          <MenuItem key="/">
            <IconBook /> {t("app.slider.home")}
          </MenuItem>

          <MenuItem key="/datascreen">
            <IconBook /> {t("app.slider.largeScreen")}
          </MenuItem>

          <SubMenu
            key="/data"
            title={
              <>
                <IconApps width={"20px"} /> {t("app.slider.dataInsight")}
              </>
            }>
            <MenuItem key="/data/live">{t("app.slider.live")}</MenuItem>
            <MenuItem key="/data/content">{t("app.slider.content")}</MenuItem>
            <MenuItem key="/data/multiple">{t("app.slider.multiple")}</MenuItem>
          </SubMenu>

          <SubMenu
            key="/order"
            title={
              <>
                <IconApps width={"20px"} /> {t("app.slider.orderManagement")}
              </>
            }>
            <MenuItem key="/order/edit">{t("app.slider.fullOrder")}</MenuItem>
            <MenuItem key="/order/list">{t("app.slider.orderStatus")}</MenuItem>
          </SubMenu>

          <SubMenu
            key="/spu"
            title={
              <>
                <IconApps width={"20px"} /> {t("app.slider.goodsManagement")}
              </>
            }>
            <MenuItem key="/spu/list">{t("app.slider.availableGoods")}</MenuItem>
            <MenuItem key="/spu/edit">{t("app.slider.modifyGoods")}</MenuItem>
            <MenuItem key="/spu/detail">{t("app.slider.goodsDetail")}</MenuItem>
          </SubMenu>

          <SubMenu
            key="/user"
            title={
              <>
                <IconApps width={"20px"} />
                {t("app.slider.userCenter")}
              </>
            }>
            <MenuItem key="/user/list"> {t("app.slider.existingUsers")}</MenuItem>
            <MenuItem key="/user/createuser"> {t("app.slider.createUser")}</MenuItem>
            <MenuItem key="/user/auth"> {t("app.slider.authorityManagement")}</MenuItem>
          </SubMenu>

          <MenuItem key="/problem">
            <IconBook /> {t("app.slider.problem")}
          </MenuItem>

          <MenuItem key="/aboutus">
            <IconBook /> {t("app.slider.aboutus")}
          </MenuItem>

          <MenuItem key="/map">
            <IconBook /> {t("app.slider.map")}
          </MenuItem>

          <MenuItem key="/like">
            <IconBook /> {t("app.slider.like")}
          </MenuItem>
        </Menu>
      </div>
    </AppHeaderWrapper>
  );
});
