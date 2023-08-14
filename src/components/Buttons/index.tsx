import React from "react";

/* Styled-Components */
import styled, { css } from "styled-components";

const Buttons: React.FC = () => {
  return (
    <>
      <h1>Studies About Buttons Components</h1>
      <StyleButton>Send Form 01</StyleButton>
    </>
  );
};

export default Buttons;

const StyleButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue_500};
    color: ${theme.colors.blue_50};
  `}

  border: none;
  border-radius: 5px;
  padding: 12px 30px;
`;
