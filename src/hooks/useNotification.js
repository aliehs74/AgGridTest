import { useSelector } from "react-redux";
import { notification } from "antd";
import { useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";

export default function useNotification() {
  const { theme, isCompact, componentDirection } = useAppSelector(
    (state) => state.theme
  );
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    theme === "dark" ? setIsDark(true) : setIsDark(false);
  }, [theme]);

  const [api, contextHolder] = notification.useNotification({
    bottom: isCompact ? 47 : 40,
    rtl: componentDirection === "rtl" ? true : false,
  });

  const openNotification = ({ type, key, message, description }) => {
    api[type]({
      key,
      message,
      description,
      placement: componentDirection === "rtl" ? "bottomLeft" : "bottomRight",
      className:
        componentDirection === "rtl"
          ? "testing-notification-rtl"
          : "testing-notification",
    });
  };
  const destroyNotification = (key) => {
    api.destroy(key);
  };

  return [openNotification, contextHolder, destroyNotification];
}
