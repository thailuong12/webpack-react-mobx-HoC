// @flow

import * as React from 'react'

declare type Props = {
  name: boolean,
  age: boolean
};

function Demo({name, age}: Props) {
  return <div>{name} {age}</div>;
}

export default Demo;
