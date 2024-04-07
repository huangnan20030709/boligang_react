import { memo, Suspense } from "react";

import { Wrapper } from "./style";

export default memo(function Map() {
  return (
    <Suspense fallback={<div>loading......</div>}>
      <Wrapper>datascreen</Wrapper>
    </Suspense>
  );
});
