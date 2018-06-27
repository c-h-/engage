import React from "react";

import styled from "styled-components/primitives";

export default styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  height: ${props => (props.height ? props.height : "auto")};
`;
