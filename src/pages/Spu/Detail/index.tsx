import { memo, Suspense } from "react";

import { Wrapper } from "./style";

export default memo(function SpuDetail() {
  return (
    <Suspense fallback={<div>loading......</div>}>
      <Wrapper>datascreen</Wrapper>
    </Suspense>
  );
});
