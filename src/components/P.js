import React from "react";

import styled from "styled-components/primitives";

export default styled.Text`
  font-size: 18px;
  text-align: ${props => (props.center ? "center" : "left")};
`;
