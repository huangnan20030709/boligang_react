import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";

import "@/assets/css/base.css";

import i18n from "./i18n";
import { useAppRoutes } from "./router";
import Loading from "./components/Loading";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {/* 这里设置Suspense是给login-dataScreen等页面设置的 */}
      <Suspense fallback={<Loading />}> {useAppRoutes()}</Suspense>
    </I18nextProvider>
  );
}

export default App;
