import { h } from "preact";

import { useGlobalState, Actions } from "../context/global-state-context";

const Button = () => {
  const { dispatch } = useGlobalState();

  return (
    <div>
      <button onClick={() => dispatch({ type: Actions.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: Actions.DECREMENT })}>
        Decremente
      </button>
    </div>
  );
};

export default Button;
