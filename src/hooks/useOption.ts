import { useStore } from "@/store";
import { useMemo } from "react";
export default function useOption(callback: Function) {
  const store = useStore();
  //
  const isDark = useMemo(() => {
    return store.themeStore.currentTheme === "dark";
  }, [store.themeStore]);

  const chartOption = callback(isDark);
  //
  return chartOption;
}
