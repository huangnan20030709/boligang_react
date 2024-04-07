import { useStore } from "@/store";
import { useMemo } from "react";

export default function useTheme() {
  const store = useStore();
  //
  const isDark = useMemo(() => {
    return store.themeStore.currentTheme === "dark";
  }, [store.themeStore]);

  const switchTheme = () => {
    store.themeStore.setcurrentTheme(store.themeStore.currentTheme === "dark" ? "light" : "dark");
  };
  //
  return { isDark, switchTheme };
}
