import { h } from "preact";

import { useGlobalState } from "../context/global-state-context";

const Counter = () => {
  const { state } = useGlobalState();

  return <p>{state.count}</p>;
};

export default Counter;
