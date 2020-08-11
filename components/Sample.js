import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 25px;
  color: darkblue;
  padding: 10px;
  border: 1px solid black;
`

const Sample = (props) => {
  return (
    <StyledDiv>
      this is test component
    </StyledDiv>
  );
}

export default Sample;