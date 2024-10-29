import { Avatar, Dropdown, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

import logo from "@/assets/logo.svg";
import DefaultAvatar from "@/assets/default-avatar.jpg";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";

interface IProps {
  onLogin: () => void;
  onRegister: () => void;
}

const AppBar = ({ onLogin, onRegister }: IProps) => {
  const { t } = useTranslation();
  const items: MenuProps["items"] = [
    {
      label: t("login"),
      key: "login",
      onClick: onLogin,
    },
    {
      label: t("register"),
      key: "signup",
      onClick: onRegister,
    },
  ];

  return (
    <div className="bg-white flex justify-between items-center p-5">
      <div className="flex gap-3 items-center font-semibold text-2xl font-mono text-yellow-500">
        <img src={logo} alt="Logo" className="h-7" />
        TKN Shop
      </div>
      <div className="flex gap-2 items-center">
        <LanguageSelect />

        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          overlayClassName="w-[200px]"
        >
          <div className="flex items-center gap-1 p-[2px] pr-[2px] rounded-full bg-gradient-to-r from-red-500 to-yellow-500">
            <div className="flex items-center gap-1 p-1 pr-2 bg-white rounded-full hover:bg-neutral-100 transition">
              <Avatar
                size={30}
                src={DefaultAvatar}
                onClick={(e) => e?.preventDefault()}
              />
              <DownOutlined />
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default AppBar;
