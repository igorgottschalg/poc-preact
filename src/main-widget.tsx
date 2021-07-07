import { h } from "preact";

import { GobalStateProvider } from "./context/global-state-context";

import Counter from "./components/counter";
import Button from "./components/button";

const Widget = () => {
  return (
    <GobalStateProvider>
      <h1>POC</h1>
      <Counter />
      <Button />
    </GobalStateProvider>
  );
};

export default Widget;
