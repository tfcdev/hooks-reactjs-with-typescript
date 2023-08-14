import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.white_500};
    `}
  }
  
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 100%;
    text-align: center;
    display: inline;
    border-bottom: 1px solid #ffeeea;
    border-top: 1px solid #ffeeea;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
  }

  input {
    width: 80%;
    height: 40px;
    border-radius: 6px;
    font-size: 24px;
    text-indent: 10px;
    border: 1px solid black;
  }

  ul {
    width: 80%;
    padding: 0;
  }

  ul li {
    width: 100%;
    height: 50px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    margin-bottom: 20px;

    background-color: #334;
    border-radius: 6px;

    input {
      height: 30px;
      width: 30px;
    }

    label {
      color: white;
      font-size: 2rem;
    }
  }
`;
