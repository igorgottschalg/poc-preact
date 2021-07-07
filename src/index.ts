import habitat from "preact-habitat";
import { store } from "preact-global-state";

import Widget from "./main-widget";

store.init({
  name: "Avant",
});

const { render } = habitat(Widget);

render({
  selector: '[data-widget-host="habitat"]',
  inline: false,
  clean: true,
  clientSpecified: false,
});
