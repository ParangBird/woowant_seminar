// @ts-ignore

import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";
import Context from "./Context";
import Rendering from "./Rendering";
import Menu from "./Menu";
import ContextSelector from "./ContextSelector";

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Menu />} />
      <Route path="/rendering" element={<Rendering />} />
      <Route path="/context" element={<Context />} />
      <Route path="/context-selector" element={<ContextSelector />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </ReactRouterRoutes>
  );
}
