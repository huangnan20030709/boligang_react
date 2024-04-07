import { memo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Form, Input, Button, Checkbox, Menu, Select } from "@arco-design/web-react";
import { useNavigate } from "react-router-dom";
const Option = Select.Option;
const FormItem = Form.Item;
const MenuItem = Menu.Item;

export default memo(function RightContent() {
  const { t } = useTranslation();
  const navigator = useNavigate();
  const [form] = Form.useForm();

  const options = [
    { name: "中国+86", value: 86 },
    { name: "美国+1", value: 1 },
  ];
  const [curPhoneBefore, changeCurPhoneBefore] = useState<number>(options[0].value);

  //@ts-ignore
  const onTabChange = (a, b) => {
    if (a === "create") {
      changeIsCreate(true);
    } else if (a === "login") {
      changeIsCreate(false);
    }
  };
  const [isCreate, changeIsCreate] = useState(true);

  const formSubmit = async () => {
    try {
      let res = await form.validate(["phone"]);
      console.log(res);
    } catch (error) {
      console.log("formSubmit-error");
    }
    navigator("/");
    console.log(1);
  };
  return (
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["create"]}
        //@ts-ignore
        onClickMenuItem={onTabChange}>
        <MenuItem key="create">验证码登录</MenuItem>
        <MenuItem key="login">密码登录</MenuItem>
      </Menu>

      <Form autoComplete="off" form={form} onSubmit={formSubmit}>
        <FormItem
          field={"phone"}
          style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
          rules={
            [
              // {
              //   validateTrigger: "",
              //   validator: async (value, callback) => {
              //     try {
              //       return new Promise((resolve, reject) => {
              //         if (value.length !== 11) {
              //           callback("11w");
              //           reject("11位十几号");
              //         } else {
              //           resolve();
              //         }
              //       });
              //     } catch (error) {
              //       console.log(error);
              //     }
              //   },
              // },
            ]
          }>
          <Input
            addBefore={
              <Select placeholder="Please select" style={{ width: 105 }} onChange={changeCurPhoneBefore} defaultValue={curPhoneBefore}>
                {options.map((option, index) => (
                  <Option key={option.value} value={option.value}>
                    {option.name}
                  </Option>
                ))}
              </Select>
            }
            placeholder="手机号"
            style={{ border: "none" }}
            type="tel"
            name="username"
          />
        </FormItem>

        <FormItem field={"yanzhengma"} style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
          <Input placeholder="输入6位数短信验证码" />
        </FormItem>

        <FormItem style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            onClick={() => {
              form.validate();
            }}>
            <span>登录{isCreate ? "/注册" : ""}</span>
          </Button>
        </FormItem>
      </Form>
    </div>
  );
});
