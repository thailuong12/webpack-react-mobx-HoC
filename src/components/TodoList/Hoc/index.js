import { compose, pure } from "recompose";
import withLifeCycle from "./withLifecycle";
import withProps from "./withProps";

import { inject, observer } from "mobx-react";
export default compose(
  inject('TodoStore'),
  withLifeCycle,
 //withProps,
  observer
);
