import { memo, useState, useEffect, useRef } from "react";
import { Form, Input, Button, Checkbox, Link } from "@arco-design/web-react";
import { useTranslation } from "react-i18next";
import { IconLock, IconUser } from "@arco-design/web-react/icon";
import { useNavigate } from "react-router-dom";

export default memo(function LoginForm() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const toSignup = () => {
    navigate("/signup");
  };
  const toHome = (str: string) => {
    console.log(formData);
    navigate(str);
  };

  const [formData, setFormData] = useState({
    username: "nan",
    post: "2864957564@qq.com",
  });
  //@ts-ignore

  const onValuesChange = (changeValue, values) => {
    setFormData(values);
  };
  const cli = () => {
    console.log(formData);
  };
  return (
    <div className="content">
      <div className="form">
        <Form
          onClick={cli}
          style={{ maxWidth: 650 }}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          autoComplete="off"
          //@ts-ignore
          initialValues={formData}
          //@ts-ignore
          onValuesChange={onValuesChange}>
          <h1>{t("page.login.submit")} ShengHui Pro</h1>
          <Form.Item field="username" rules={[{ required: true }]}>
            <Input prefix={<IconUser />} />
          </Form.Item>

          <Form.Item field="post" rules={[{ required: true }]}>
            <Input.Password prefix={<IconLock />} type="password" />
          </Form.Item>

          <div style={{ display: "flex", justifyContent: "space-between", width: "75%" }}>
            <Checkbox>{t("page.login.remmberPassword")}</Checkbox>
            <Link href="/forgotPassword">{t("page.login.forgotPassword")} </Link>
          </div>

          <Form.Item field="user.post" rules={[{ required: true }]}>
            <Button
              type="primary"
              style={{ width: "100%" }}
              onClick={() => {
                toHome("/");
              }}>
              {t("page.login.submit")}
            </Button>
          </Form.Item>

          <Form.Item field="user.post" rules={[{ required: true }]}>
            <Button type="text" style={{ width: "100%" }} onClick={toSignup}>
              {t("page.login.createAccount")}
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="footer">
        <footer>ShengHui Pro</footer>
      </div>
    </div>
  );
});
